const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.specialRulesDeclaration,
  previous: [
    {
      page: urls.bestDescribe,
      condition: {
        field: urls.bestDescribe,
        value: "friend",
        match: match.value,
      },
    },
    {
      page: urls.bestDescribe,
      condition: {
        field: urls.bestDescribe,
        value: "charity",
        match: match.value,
      },
    },
    {
      page: urls.whoIsApplying,
    },
  ],
  next: [
    {
      page: urls.whoIsApplyingIneligible,
      condition: {
        field: urls.specialRulesDeclaration,
        value: "yes",
        match: match.value,
      },
    },
    {
      page: urls.birthDate,
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required:
        "Select yes if your doctor has said you might have less than 12 months to live",
    },
  },
};

module.exports = registerController(config.name, config);
