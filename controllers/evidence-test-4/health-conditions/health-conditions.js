const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.healthConditions,
  previous: urls.start,
  next: urls.healthConditionsAdded,
  validation: [
    {
      name: 'health-conditions',
      type: validation.select,
      options: {
        minLength: 1,
        maxLength: 200,
      },
      errors: {
        required: 'Enter the name of your health condition or disability',
        maxLength: 'Enter the name of your health condition or disability in 200 characters or less',
      },
    },
    {
      name: "health-conditions-start-date",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 50,
      },
      errors: {
        required:
          'Enter the approximate date this health condition or disability started',
        maxLength: 'Enter the approximate date this health condition or disability started in 50 characters or less',
      },
    },
  ],
}

module.exports = registerController(config.name, config);
