const express = require('express');
const healthEndpoint = require('./health');
const infoEndpoint = require('./info');
const metricsEndpoint = require('./metrics');

module.exports = (packageJson) => {
  const router = express.Router();

  router.get('/actuator/health', healthEndpoint);
  router.get('/actuator/info', infoEndpoint(packageJson));
  router.get('/actuator/metrics', metricsEndpoint);

  return router;
};
