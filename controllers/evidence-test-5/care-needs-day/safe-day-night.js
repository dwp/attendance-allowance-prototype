const {
  urls,
  match,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.safeDayNight,
  previous: urls.nightDifficulties,
  next: urls.difficultiesStartDate,
  validation: [
    {
      name: "safe-day-night",
      type: validation.checkboxes,
      errors: {
        required:
          "Select yes if you need someone with you to make sure you are safe at home",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
