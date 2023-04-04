const { conditionMatch } = require('../utils/conditionMatch');

const handleBackLink = (config, req) => {
  let backLink = '';
  if (!config || !config.previous) {
    backLink = '';
  } else if (config.previous === 'none') {
    backLink = '';
  } else {
    let routingConfig = config.previous;
    if (!Array.isArray(config.previous)) {
      routingConfig = [{
        page: config.previous,
      }];
    }

    const routingMatch = conditionMatch(routingConfig, req);
    if (routingMatch) {
      backLink = routingMatch;
    }
  }
  return backLink;
};

const handleGetRequest = (urlPath, config = null) => (req, res, next) => {
  let path = urlPath;
  if (path === '') {
    path = 'index';
  }
  const backLink = handleBackLink(config, req);
  if (res.locals && res.locals.data) {
    res.locals.data['back-link'] = backLink;
  }
  res.render(path, config, (error, html) => {
    if (error) {
      console.log('error rendering page', error)
    }
    if (!error) {
      res.set({ 'Content-type': 'text/html; charset=utf-8' });
      res.send(html);
    } else if (!path.endsWith('index')) {
      handleGetRequest(`${path}index`)(req, res, next);
    } else {
      next(error);
    }
  });
};

module.exports = {
  handleGetRequest,
};
