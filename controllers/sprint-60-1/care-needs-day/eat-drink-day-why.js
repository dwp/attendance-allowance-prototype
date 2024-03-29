const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.eatDrinkDayWhy,
  previous: [
    {
      page: urls.eatDrinkDay,
    },
  ],
  next: [
    {
      page: urls.eatDrinkDayFrequency,
    },
  ],
  validation: [
    {
      name: 'something-else-eating-drinking-day-why-explain',
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 100,
      },
      errors: {
        required: 'You must tell us what you struggle with',
      },
      condition: {
        field: 'eat-drink-day-why',
        value: 'eat-drink-why-something-else', 
      },
    }, 
    {
      name: 'eat-drink-day-why',
      type: validation.checkboxes,
    }]
};

module.exports = registerController(config.name, config);
