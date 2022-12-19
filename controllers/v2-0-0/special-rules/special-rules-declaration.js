const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.specialRulesDeclaration,
  previous: urls.illnessDisability,
  next: [
    {
      page: urls.specialRulesForm,
      condition: {
        field: urls.specialRulesDeclaration,
        value: 'yes',
        match: match.value,
      },
    },
    {
      page: urls.renalDialysis,
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
