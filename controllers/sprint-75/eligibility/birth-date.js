const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.birthDate,
  previous: [
    {
      page: urls.specialRulesDeclaration,
    },
  ],
  next: [
    {
      page: urls.birthDateIneligible,
      condition: {
        field: "birth-date-year",
        value: 1955,
        match: match.greaterThan,
      },
    },
    {
      page: urls.otherBenefits,
    },
  ],
  validation: {
    type: validation.dateInput,
    errors: {
      required: 'Enter your date of birth',
    },
  },
};

module.exports = registerController(config.name, config);
