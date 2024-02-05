module.exports = () => (req, res, next) => {
    if (req.query && req.query.locale) {
      req.session.locale = req.query?.locale === 'NI' ? 'NI' : 'GB';
      res.locals.locale = req.session.locale;
    }
    res.locals.locale = req.session?.locale;
    next();
  };