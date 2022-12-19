module.exports = (req, res) => {
  res.status(200).json({
    uptime: process.uptime(),
  });
};
