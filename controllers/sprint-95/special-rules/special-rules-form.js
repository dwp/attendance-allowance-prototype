const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.specialRulesForm,
  previous: urls.specialRulesDeclaration,
  next: [
    {
      page: urls.illnessDisability,
      condition: {
        field: urls.specialRulesDeclaration,
        value: "yes",
        match: match.value,
      },
    },
    {
      page: urls.illnessDisability,
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required: 'Select if your doctor, consultant or specialist nurse has completed an SR1 form',
    },
  },
};

module.exports = registerController(config.name, config);
