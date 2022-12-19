const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.keepEyeDuration,
  previous: urls.keepEyeWhy,
  next: urls.checkAnswersDay,
  validation: {
    type: validation.radios,
  },
};

module.exports = registerController(config.name, config);
