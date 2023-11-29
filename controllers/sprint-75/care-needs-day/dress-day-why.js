const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.dressDayWhy,
  previous: [
    {
      page: urls.dressDay,
    },
  ],
  next: [
    {
      page: urls.additionalDressDay,
    },
  ],
  validation: [
    {
      name: 'something-else-dress-day-why-explain',
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 200,
      },
      errors: {
        required: 'You must tell us in what other way you struggle.',
        maxLength: 'Tell us in what other way you struggle must be 200 characters or less.',
      },
      condition: {
        field: 'dress-day-why',
        value: 'dress-day-why-something-else',
      },
    },
    {
      name: 'dress-day-why',
      type: validation.checkboxes,
    }],
};

module.exports = registerController(config.name, config);
