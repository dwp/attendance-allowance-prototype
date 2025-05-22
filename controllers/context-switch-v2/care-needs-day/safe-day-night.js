const {
  urls,
  match,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.safeDayNight,
  previous: urls.checkAnswersNight,
  next: [
    {
      page: urls.noDifficultiesIneligible,
      condition: {
        page: urls.noDifficultiesIneligible,
        match: match.custom,
        customValidation: (data) => {
          return data[urls.safeDayNight]?.includes('no') &&
            data[urls.dayDifficulties]?.includes('daytime-none') &&
            data[urls.nightDifficulties]?.includes('nighttime-none')
        }
      },
    },
    {
      page: urls.difficultiesStartDate,
    },
  ],
  validation: [
    {
      name: "safe-day-night",
      type: validation.checkboxes,
      errors: {
        required:
          "Select yes if they need someone with them to make sure they are safe at home",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
