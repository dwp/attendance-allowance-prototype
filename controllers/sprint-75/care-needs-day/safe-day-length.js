const {
  urls,
  match,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.safeDayLength,
  previous: urls.safeDayWhy,
  next: [
    {
      page: urls.safeNightFrequency,
      condition: {
        page: urls.safeDayNight,
        field: 'safe-day-night',
        value: ['night'],
        match: match.anyOne,
      },
    },
    {
      page: urls.checkAnswersStartDate,
    },
  ],
  validation: {
    type: validation.radios,
  },
};

module.exports = registerController(config.name, config);
