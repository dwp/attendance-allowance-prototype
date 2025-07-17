const {
  urls,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.dayDifficulties,
  previous: urls.checkAnswersDetails,
  next: urls.checkAnswersDay,
  validation: {
    type: validation.checkboxes,
    errors: {
      required:
        "Select the activities you have difficulty or need help with during the day",
    },
  },
};

module.exports = registerController(config.name, config);
