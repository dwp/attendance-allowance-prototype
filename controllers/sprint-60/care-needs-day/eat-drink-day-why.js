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
  validation: {
    type: validation.checkboxes,
  },
};

module.exports = registerController(config.name, config);
