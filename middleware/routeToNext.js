module.exports = (source, target) => (req, res, next) => {
  delete req.session.data.validation;
  if (req.session.data['cya-destination'] && req.session.data['cya-destination'] === `${source}`) {
    if (req.session.data['cya-origin']) {
      const redirectOrigin = req.session.data['cya-origin'];
      delete req.session.data['cya-origin'];
      delete req.session.data['cya-destination'];
      res.redirect(`${req.version}${redirectOrigin}`);
    } else {
      res.redirect(`${req.version}check-answers-full-list`);
    }
  } else {
    res.redirect(`${req.version}${target}`);
  }
};
