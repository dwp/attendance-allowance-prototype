const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.preferenceContact,
  previous: urls.telephoneNumberOther,
  next: urls.welshLanguageSpeak,
  validation: {
    type: validation.radios,
    errors: {
      required: 'Select who we should contact first if we have questions',
    },
  },
};

module.exports = registerController(config.name, config);
