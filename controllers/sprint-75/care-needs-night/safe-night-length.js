const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.safeNightLength,
  previous: [
    {
      page: urls.safeNightFrequency,
    },
  ],
  next: [
    {
      page: urls.aidsAdaptationsQuestion,
    },
  ],
  validation: [
    {
      name: 'safe-night-length',
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 200,
      },
      errors: {
        required: 'You need to enter how long is someone awake in the night to keep you safe',
        maxLength: 'Tell us in 200 characters of less, approximately how long someone is awake in the night to keep you safe',
      },
    },
  ],
};

module.exports = registerController(config.name, config);
