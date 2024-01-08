const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.aidsAdaptationsQuestion,
  next: [
    {
      page: urls.aidsAdaptationsReason,
      condition: {
        field: urls.aidsAdaptationsQuestion,
        value: "no",
        match: match.value,
      },
    },
    {
      page: urls.aidsAdaptations,
    },
  ],
  previous: [
    {
      page: urls.aidsAdaptationsReason,
      page: urls.safeNightLength,
      condition: {
        field: urls.aidsAdaptationsQuestion,
        value: "no",
        match: match.value,
        field: urls.safeDayNight,
        value: ["day"],
        match: match.anyOne,
      },
    },
    {
      page: urls.aidsAdaptations,
      page: urls.safeNightLength,
      condition: {
        field: urls.safeDayNight,
        value: ["night"],
        match: match.anyOne,
      },
    },
    {
      page: urls.safeDayNight,
    },
  ],
  validation: [
    {
      name: "aids-adaptations-question",
      type: validation.radios,
      errors: {
        required:
          "Select yes if you have any home adaptations, specialist equipment or aids",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
