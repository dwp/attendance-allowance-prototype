const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.birthDate,
  previous: [
    {
      page: urls.helpingSomeoneIntro,
      condition: {
        field: urls.personClaiming,
        value: 'helping-someone',
        match: match.value,
      },
    },
    {
      page: urls.personClaiming,
    },
  ],
  next: [
    {
      page: urls.birthDateIneligible,
      condition: {
        field: 'birth-date-year',
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
  },
};

module.exports = registerController(config.name, config);
