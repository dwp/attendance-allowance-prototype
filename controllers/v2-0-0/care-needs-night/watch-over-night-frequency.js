const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.watchOverNightFrequency,
  previous: urls.watchOverNightWhy,
  next: urls.checkAnswersNight,
  validation: [{
    type: validation.radios,
    name: 'watch-over-night-frequency',
    errors: {
      required: 'You must select how many times.',
    },
  },
  {
    type: validation.radios,
    name: 'keep-eye-on-you-average-time',
    errors: {
      required: 'You must select how long.',
    },
  },
  {
    type: validation.radios,
    name: 'keep-eye-on-you-times-week',
    errors: {
      required: 'You must select how many times.',
    },
  },
  ],
};
module.exports = registerController(config.name, config);
