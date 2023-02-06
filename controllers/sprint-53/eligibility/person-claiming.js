const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.personClaiming,
  previous: urls.start,
  next: [
    {
      page: urls.personClaimingIneligible,
      condition: {
        field: urls.personClaiming,
        value:
          'official-capacity',
        match: match.value,
      },
    },
    {
      page: urls.birthDate,
    },
  ],
  validation: {
    type: validation.radios,
  },
};

module.exports = registerController(config.name, config);
