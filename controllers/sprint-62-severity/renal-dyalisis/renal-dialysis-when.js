const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.renalDialysisWhen,
  previous: urls.renalDialysisWhere,
  next: urls.renalDialysisFrequency,
  validation: {
    type: validation.radios,
    errors: {
      required: 'We need to know when you receive your treatment.',
    },
  },
};

module.exports = registerController(config.name, config);
