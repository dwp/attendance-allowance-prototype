const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.communicationDayDifficulties,
  previous: urls.communicationDay,
  next: urls.keepEyeIntroduction,
  validation: {
    type: validation.checkboxes,
  },
};

module.exports = registerController(config.name, config);
