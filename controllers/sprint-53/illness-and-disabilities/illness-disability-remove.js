const express = require('express');

const illnessDisabilityRemove = () => {
  const router = express.Router();
  router.get(':remove', (req, res, next) => {
    res.send('remove' + req.params.remove);
  });
  router.get('/:remove', (req, res, next) => {
    res.send('remove' + req.params.remove);
  });
  router.get('/', (req, res, next) => {
    res.send('remove' + req.params.remove);
  });
  return router;
};

module.exports = illnessDisabilityRemove;
