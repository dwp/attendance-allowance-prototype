const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.difficultiesStartDate,
  previous: urls.checkAnswersNight,
  next: urls.checkAnswersStartDate,
  validation: {
    type: validation.dateInput,
  },
};

module.exports = registerController(config.name, config);
