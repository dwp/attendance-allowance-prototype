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
        field: "age-range-check-year",
        value: 1958,
        match: match.greaterThan,
      },
    },
      {
        page: urls.ageRangeIneligible,
        condition: {
          field: "age-range-check-year",
          value: 1953,
          match: match.lessThan,
        },
    },
    {
      page: urls.beforeYouStart,
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
