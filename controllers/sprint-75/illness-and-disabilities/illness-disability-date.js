const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.illnessDisabilityDate,
  next: urls.illnessDisabilityAdded,
  previous: urls.illnessDisability,
  validation: [
    {
      name: 'illness-start-date',
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 50,
      },
      errors: {
        required: 'Enter the approximate date when your condition or disability started.',
        maxLength: 'The approximate date must be 50 characters or less.',
      },
    },
  ],
};

module.exports = registerController(config.name, config);
