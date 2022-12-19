const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.communicationDayFrequency,
  previous: urls.communicationDay,
  next: urls.keepEyeIntroduction,
  validation: {
    type: validation.radios,
  },
};

module.exports = registerController(config.name, config);
