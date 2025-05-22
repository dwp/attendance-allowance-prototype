const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.specialRulesDeclaration,
  previous: urls.homeAddressSelect,
  next: [
    {
      page: urls.careHomeHospital,
      condition: {
        field: urls.specialRulesDeclaration,
        value: "yes",
        match: match.value,
      },
    },
    {
      page: urls.careHomeHospital,
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required:
        "Select yes if their doctor, consultant or specialist nurse has said they might have less than 12 months to live due to their condition",
    },
  },
};

module.exports = registerController(config.name, config);
