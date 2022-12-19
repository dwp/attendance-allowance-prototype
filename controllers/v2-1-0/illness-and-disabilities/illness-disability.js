const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.illnessDisability,
  next: urls.specialRulesDeclaration,
  previous: urls.careHomeHospital,
  validation: {
    type: validation.textInput,
    errors: {
      required: 'You need to tell us if you have any illnesses, physical or mental disabilities.',
    },
  },
};

module.exports = registerController(config.name, config);
