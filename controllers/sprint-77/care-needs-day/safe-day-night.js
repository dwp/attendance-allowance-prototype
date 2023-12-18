const {
  urls,
  match,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.safeDayNight,
  previous: [
    {
      page: urls.checkAnswersNight,
    },
  ],
  next: [
    {
      page: urls.safeDayWhy,
      condition: {
        page: urls.safeDayNight,
        field: "safe-day-night",
        value: ["day"],
        match: match.anyOne,
      },
    },
    {
      page: urls.safeNightFrequency,
      condition: {
        page: urls.safeDayNight,
        field: "safe-day-night",
        value: ["night"],
        match: match.anyOne,
      },
    },
    {
      page: urls.aidsAdaptationsQuestion,
    },
  ],
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
