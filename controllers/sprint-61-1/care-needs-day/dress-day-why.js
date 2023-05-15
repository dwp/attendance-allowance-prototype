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
        maxLength: 100,
      },
      errors: {
        required: 'You must tell us how you are struggling.',
      },
      condition: {
        field: 'dress-day-why',
        value: 'dress-day-why-something-else', 
      },
    }, 
    {
      name: 'dress-day-why',
      type: validation.checkboxes,
    }]
};

module.exports = registerController(config.name, config);
