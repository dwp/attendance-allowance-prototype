const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.washDayWhy,
  previous: urls.washDay,
  next: [
    {
      page: urls.additinalWashDay,
    },
  ],
  validation: [
    {
      name: 'something-else-wash-day-why-explain',
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 200,
      },
      errors: {
        required: 'You must tell in what other way you struggle.',
        maxLength: 'Tell us in what other way you struggle must be 200 characters or less.',
      },
      condition: {
        field: 'wash-day-why',
        value: 'wash-day-why-something-else',
      },
    },
    {
      name: 'wash-day-why',
      type: validation.checkboxes,
    },
  ],
};

module.exports = registerController(config.name, config);
