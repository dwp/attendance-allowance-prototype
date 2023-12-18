const {
  urls,
  match,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.safeNightFrequency,
  previous: [
    {
      page: urls.safeDayLength,
      condition: {
        page: urls.safeDayNight,
        field: 'safe-day-night',
        value: ['day'],
        match: match.anyOne,
      },
    },
    {
      page: urls.safeDayNight,
    },
  ],
  next: [
    {
      page: urls.safeNightLength,
    },
  ],
  validation: {
    type: validation.radios,
  },
};

module.exports = registerController(config.name, config);
