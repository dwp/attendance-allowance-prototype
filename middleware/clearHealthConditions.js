module.exports = (req, res, next) => {

  if (req.session.data['health-conditions-rows']?.length > 0) {
    req.session.data['health-conditions'] = undefined;
    req.session.data['health-conditions-start-date'] = undefined;
  }

  next();
};
