const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.renalDialysisHelp,
  previous: urls.renalDialysisFrequency,
  next: urls.treatmentSurgery,
  validation: {
    type: validation.radios,
    errors: {
      required: 'You must enter either yes or no.',
    },
  },
};

module.exports = registerController(config.name, config);
