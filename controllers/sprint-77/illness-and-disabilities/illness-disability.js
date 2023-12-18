const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.illnessDisability,
  next: urls.illnessDisabilityDate,
  previous: urls.careHomeHospital,
      
  validation: {
    type: validation.textInput,
    errors: {
      required: 'Enter the name of your health condition or disability',
    },
  },
};

module.exports = registerController(config.name, config);
