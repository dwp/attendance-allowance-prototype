const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.illnessDisabilityAdded,
  next: [
    {
      page: urls.specialRulesDeclaration,
      condition: {
        field: urls.illnessDisabilityAdded,
        value: 'no',
        match: match.value,
      },
    },
    {
      page: urls.illnessDisability,
    },
  ],
  previous: urls.illnessDisability,
  validation: {
    type: validation.radios,
    errors: {
      required: 'You must select an option.',
    },
  },
};

module.exports = registerController(config.name, config);
