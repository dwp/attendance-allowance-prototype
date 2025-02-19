const {
  urls,
  match,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.nightDifficulties,
  previous: urls.dayDifficulties,
  next: urls.safeDayNight,
  validation: {
    type: validation.checkboxes,
    errors: {
      required:
        "Select what you have difficulty or need help with during the night",
    },
  },
};

module.exports = registerController(config.name, config);
