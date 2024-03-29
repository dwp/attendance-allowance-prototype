const {
  urls,
  validation,
  registerController,
} = require('../../utils/controller');

const config = {
  name: urls.nationalityOther,
  next: urls.country,
  validation: {
    type: validation.textInput,
    options: {
      minLength: 1,
      maxLength: 100,
    },
    errors: {
      required: 'Enter your nationality',
      maxLength: 'Nationality must be 100 characters or fewer.',
    },
  },
};

module.exports = registerController(config.name, config);
