module.exports = (version) => (req, res, next) => {
  req.version = version;
  next();
};
