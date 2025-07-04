const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.aidsAdaptationsQuestion,
  previous: urls.supportingDocumentsIntro,
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
  validation: [
    {
      name: "aids-adaptations-question",
      type: validation.radios,
      errors: {
        required:
          "Select yes if they have any home adaptations, specialist equipment or aids",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
