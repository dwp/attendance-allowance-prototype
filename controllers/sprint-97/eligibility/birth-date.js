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
      page: urls.whoIsApplying,
      condition: {
        field: urls.whoIsApplying,
        value: "myself",
        match: match.value,
      },
    },
    {
      page: urls.helpingSomeoneIntro,
      condition: {
        field: urls.bestDescribe,
        value: "friend",
        match: match.value,
      },
    },
    {
      page: urls.helpingSomeoneIntro,
      condition: {
        field: urls.bestDescribe,
        value: "charity",
        match: match.value,
      },
    },
    {
      page: urls.effectiveDate,
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
      requiredDay: 'Date of birth must include a day',
      requiredMonth: 'Date of birth must include a month',
      requiredYear: 'Date of birth must include a year',
      validDay: 'Enter a real date of birth',
      validMonth: 'Enter a real date of birth',
      validYear: 'Enter a real date of birth',
      invalidDate: 'Date of birth must be a real date',
    },
  },
};

module.exports = registerController(config.name, config);
