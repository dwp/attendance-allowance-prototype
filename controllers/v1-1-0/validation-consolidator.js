/* eslint-disable no-param-reassign */

const express = require('express');

const router = express.Router();

// Inspect the validation passed and load it en-masse to req & pass back if problem
const hasValidationErrors = (req, validation) => {
  req.session.data.validation = {};
  const errors = [];

  if (!validation) {
    return false;
  }

  let foundErrors = false;

  Object.keys(validation).forEach((result) => {
    if (validation[result] && validation[result].valid === false) {
      foundErrors = true;
      errors.push(validation[result].error);
    }
  });

  if (foundErrors) {
    req.session.data.validation = validation;
    req.session.data.validation.errors = errors;
  }

  return foundErrors;
};

module.exports = { router, hasValidationErrors };
