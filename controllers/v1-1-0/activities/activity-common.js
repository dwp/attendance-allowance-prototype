const express = require('express');
const { CheckboxesValidator, RadioValidator } = require('../../../validators');

const router = express.Router();

const validateMentalNeeds = (activity, value) => {
  const options = {
    name: `${activity}-mental`,
    required: true,
  };
  const errors = {
    required: 'Select one or more options',
  };
  const mentalNeedsValidator = new CheckboxesValidator(options, errors);
  mentalNeedsValidator.validate(value);
  return {
    valid: mentalNeedsValidator.valid,
    error: mentalNeedsValidator.error,
  };
};

const validateDayNight = (activity, value) => {
  const options = {
    name: `${activity}-phase`,
    required: true,
  };
  const errors = {
    required: 'Choose either day, night or both options',
  };
  const dayNightValidator = new CheckboxesValidator(options, errors);
  dayNightValidator.validate(value);
  return {
    valid: dayNightValidator.valid,
    error: dayNightValidator.error,
  };
};

const validateDayFrequency = (activity, value) => {
  const options = {
    name: `${activity}-day-frequency`,
    required: true,
  };
  const errors = {
    required: 'Select how many times during the day from the options provided',
  };
  const dayFrequencyValidator = new RadioValidator(options, errors);
  dayFrequencyValidator.validate(value);
  return {
    valid: dayFrequencyValidator.valid,
    error: dayFrequencyValidator.error,
  };
};

const validateDayHistory = (activity, value) => {
  const options = {
    name: `${activity}-day-history`,
    required: true,
  };
  const errors = {
    required: 'You need to select when this started, during the day',
  };
  const dayHistoryValidator = new RadioValidator(options, errors);
  dayHistoryValidator.validate(value);
  return {
    valid: dayHistoryValidator.valid,
    error: dayHistoryValidator.error,
  };
};

const validateNightFrequency = (activity, value) => {
  const options = {
    name: `${activity}-night-frequency`,
    required: true,
  };
  const errors = {
    required: 'Select how many times during the night from the options provided',
  };
  const nightFrequencyValidator = new RadioValidator(options, errors);
  nightFrequencyValidator.validate(value);
  return {
    valid: nightFrequencyValidator.valid,
    error: nightFrequencyValidator.error,
  };
};

const validateNightMinutes = (activity, value) => {
  const options = {
    name: `${activity}-night-minutes`,
    required: true,
  };
  const errors = {
    required: 'Select if this takes you longer than 20 minutes or not',
  };
  const nightMinutesValidator = new RadioValidator(options, errors);
  nightMinutesValidator.validate(value);
  return {
    valid: nightMinutesValidator.valid,
    error: nightMinutesValidator.error,
  };
};

const validateNightHistory = (activity, value) => {
  const options = {
    name: `${activity}-night-history`,
    required: true,
  };
  const errors = {
    required: 'You need to select when this started, during the night',
  };
  const nightHistoryValidator = new RadioValidator(options, errors);
  nightHistoryValidator.validate(value);
  return {
    valid: nightHistoryValidator.valid,
    error: nightHistoryValidator.error,
  };
};

// The calls to the various validators.  Return the validation
const validate = (req, activity) => {
  req.session.data.validation = {};
  const validation = {};
  validation[`${activity.slice(11)}-mental`] = validateMentalNeeds(activity.slice(11), req.session.data[`${activity.slice(11)}-mental`]);
  validation[`${activity}-phase`] = validateDayNight(activity, req.session.data[`${activity}-phase`]);
  if (req.session.data[`${activity}-phase`]?.includes('day')) {
    validation[`${activity}-day-frequency`] = validateDayFrequency(activity, req.session.data[`${activity}-day-frequency`]);
    validation[`${activity}-day-history`] = validateDayHistory(activity, req.session.data[`${activity}-day-history`]);
  }
  if (req.session.data[`${activity}-phase`]?.includes('night')) {
    validation[`${activity}-night-frequency`] = validateNightFrequency(activity, req.session.data[`${activity}-night-frequency`]);
    validation[`${activity}-night-minutes`] = validateNightMinutes(activity, req.session.data[`${activity}-night-minutes`]);
    validation[`${activity}-night-history`] = validateNightHistory(activity, req.session.data[`${activity}-night-history`]);
  }

  return validation;
};

// returns whether validation errors encountered
const hasValidationErrorsForActivity = (req, activity) => {
  const errors = [];
  const validation = validate(req, activity);

  // gather the validation stuff together
  let hasValidationErrors = false;

  Object.keys(validation).forEach((result) => {
    if (!validation[result].valid) {
      hasValidationErrors = true;
      errors.push(validation[result].error);
    }
  });

  // set up the validation for req
  if (hasValidationErrors) {
    validation.errors = errors;
    req.session.data.validation = validation;
  }
  // important changes bundled in to req, just pass back if they are needed
  return hasValidationErrors;
};

module.exports = { router, hasValidationErrorsForActivity };
