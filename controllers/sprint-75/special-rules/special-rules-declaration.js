const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.specialRulesDeclaration,
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
      page: urls.personClaimingIneligible,
      condition: {
        field: urls.specialRulesDeclaration,
        value: 'yes',
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
      required: 'You must enter either yes or no.',
    },
  },
};

module.exports = registerController(config.name, config);
