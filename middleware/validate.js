/* eslint-disable no-param-reassign */
const {
  TextValidator,
  DateValidator,
  CheckboxesValidator,
  RadioValidator,
  DropdownValidator,
  MatchValidator,
  UploadValidator,
} = require('../validators');

module.exports = (config, isArray) => (req, res, next) => {
  let validator = {};
  if (!config.validation.options) {
    config.validation.options = {};
  }

  config.validation.options.name = config.name;
  switch (config.validation.type) {
    case 'textInput':
      validator = new TextValidator(config.validation.options, config.validation.errors);
      break;
    case 'dateInput':
      validator = new DateValidator(config.validation.options, config.validation.errors);
      break;
    case 'checkboxes':
      validator = new CheckboxesValidator(config.validation.options, config.validation.errors);
      break;
    case 'radios':
      validator = new RadioValidator(config.validation.options, config.validation.errors);
      break;
    case 'select':
      validator = new DropdownValidator(config.validation.options, config.validation.errors);
      break;
    case 'match':
      validator = new MatchValidator(config.validation.options, config.validation.errors);
      break;
    case 'upload':
      validator = new UploadValidator(config.validation.options, config.validation.errors);
      break;
    default:
      validator = new TextValidator(config.validation.options, config.validation.errors);
      break;
  }

  if (isArray) {
    if (!res.locals.validation) {
      res.locals.validation = [];
    }
  }

  if (config.validation.type === 'dateInput') {
    const dayValid = validator.validate(req.session.data[`${config.name}-day`], 'day');
    const monthValid = validator.validate(req.session.data[`${config.name}-month`], 'month');
    const yearValid = validator.validate(req.session.data[`${config.name}-year`], 'year');

    if (!dayValid.valid && !dayValid.valid && !dayValid.valid) {
      res.locals.validation = {
        error: {
          href: `#${validator.options.name}`,
          text: validator.errors.required,
        },
        valid: false
      };
    } else if (!dayValid.valid) {
      res.locals.validation = dayValid;
    } else if (!monthValid.valid) {
      res.locals.validation = monthValid;
    } else if (!yearValid.valid) {
      res.locals.validation = yearValid;
    }
  } else if (config.validation.type === 'match') {
    const validationResult = validator.validate(req.session.data[`${config.name}`], req.session.data[`${config.validation.options.matchTo}`]);
    if (isArray) {
      res.locals.validation.push({ ...validationResult, name: config.name });
    } else {
      res.locals.validation = validationResult;
    }
  } else {
    const validationResult = validator.validate(req.session.data[config.name], req.session.data[config.validation?.rows]);
    if (isArray) {
      res.locals.validation.push({ ...validationResult, name: config.name });
    } else {
      res.locals.validation = validationResult;
    }
  }
  if (!isArray) {
    next();
  }
};
