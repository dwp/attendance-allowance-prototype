const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.specialRulesFormCompleted,
  previous: urls.specialRulesDeclaration,
  next: urls.illnessDisability,
  validation: {
    type: validation.radios,
    errors: {
      required: 'Select yes if your doctor, consultant or specialist nurse has completed an SR1 form',
    },
  },
};

module.exports = registerController(config.name, config);
