const express = require('express');
const {
  urls, validation, match, options,
} = require('./constants');
const handlePostRequest = require('../middleware/handlePostRequest');
const { handleGetRequest } = require('../middleware/handleGetRequest');

const registerController = (source, config, logic) => {
  const router = express.Router();
  router.get('/', (req, res, next) => {
    const routeWithoutSlash = `${req.version}${source}`.substring(1);
    handleGetRequest(routeWithoutSlash, config)(req, res, next);
  });
  router.post('/', handlePostRequest(source, config, logic));
  return router;
};

module.exports = {
  express,
  urls,
  options,
  validation,
  match,
  handlePostRequest,
  registerController,
};
