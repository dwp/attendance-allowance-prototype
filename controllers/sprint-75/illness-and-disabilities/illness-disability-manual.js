const {
  urls,
  registerController,
  validation,
} = require('../../../utils/controller');

const config = {
  name: urls.illnessDisabilityManual,
  next: urls.illnessDisabilityDateManual,
  previous: urls.illnessDisability,
  validation: [
    {
      name: 'illness-disability-manual',
      type: validation.textInput,
      errors: {
        required: 'Enter the name of your health condition or disability.',
      },
    },
  ],
};

module.exports = registerController(config.name, config);
