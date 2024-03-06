const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.specialRulesDeclaration,
  previous: urls.birthDate,
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
      page: urls.otherBenefits,
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
