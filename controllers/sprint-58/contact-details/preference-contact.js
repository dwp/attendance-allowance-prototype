const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.preferenceContact,
  previous: urls.telephoneNumberOther,
  next: urls.alternativeFormats,
  validation: {
    type: validation.radios,
    errors: {
      required: 'You must select an option.',
    },
  },
};

module.exports = registerController(config.name, config);
