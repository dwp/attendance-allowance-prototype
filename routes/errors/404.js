module.exports = (err, req, res, next) => {
  // eslint-disable-next-line no-console
  console.log(`404 Not Found: ${req.url}`);
  res.render('errors/404');
};
