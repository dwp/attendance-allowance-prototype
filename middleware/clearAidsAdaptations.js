module.exports = (req, res, next) => {

  if (req.session.data['aids-adaptations-rows-2']?.length > 0) {
    req.session.data['aids-adaptations-2'] = undefined;
    req.session.data['aids-adaptations-difficulty-2'] = undefined;
  }

  next();
};
