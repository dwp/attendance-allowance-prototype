const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.renalDialysisFrequency,
  previous: urls.renalDialysisWhen,
  next: urls.renalDialysisHelp,
  validation: {
    type: validation.radios,
    errors: {
      required: 'You must select one of the values.',
    },
  },
};

module.exports = registerController(config.name, config);
