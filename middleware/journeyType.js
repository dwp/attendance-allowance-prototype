module.exports = () => (req, res, next) => {
    if (req.query && req.query.journeyType) {
      req.session.journeyType = req.query?.journeyType ? req.query.journeyType : 'SPECIAL_RULES';
      res.locals.journeyType = req.session.journeyType;
    }
    res.locals.journeyType = req.session?.journeyType;
    next();
  };