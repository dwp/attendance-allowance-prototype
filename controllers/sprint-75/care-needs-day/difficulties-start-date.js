const {
  urls,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.difficultiesStartDate,
  previous: urls.checkAnswersNight,
  next: urls.checkAnswersStartDate,
  validation: [
    {
      name: "start-date",
      type: validation.radios,
      errors: {
        required:
          "Select yes if your difficulties started more than 6 months ago",
      },
    },
    {
      name: "difficulties-start-date",
      type: validation.dateInput,
      condition: {
        field: "start-date",
        value: "less-than-six-months",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
