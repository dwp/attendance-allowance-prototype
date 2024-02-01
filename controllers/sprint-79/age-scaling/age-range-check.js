const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.ageRangeCheck,
  previous: urls.start,
  next: [
    {
      page: urls.ageRangeIneligible,
      condition: {
        field: "birth-date-year",
        value: 1953,
        match: match.greaterThan,
      },
    },
    {
      page: urls.beforeYouStart,
    },
  ],
  validation: {
    type: validation.dateInput,
    errors: {
      required: "Enter the applicant's date of birth",
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
