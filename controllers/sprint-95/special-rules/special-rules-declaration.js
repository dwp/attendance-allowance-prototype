const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.specialRulesDeclaration,
  previous: urls.careHomeHospital, 
  next: [
    {
      page: urls.specialRulesFormCompleted,
      condition: {
        field: urls.specialRulesDeclaration,
        value: "yes",
        match: match.value,
      },
    },
    {
      page: urls.limitReached,
      condition: {
        field: urls.specialRulesDeclaration,
        value: "no",
        sessionValue: "SREL",
        match: match.sessionAndValue,
      },
    },
    {
      page: urls.illnessDisability,
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required:
        "Select yes if your doctor, consultant or specialist nurse has said you might have less than 12 months to live due to your condition",
    },
  },
};

module.exports = registerController(config.name, config);
