const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.telephoneNumberOther,
  previous: urls.addContactDetails,
  next: urls.preferenceContact,
  validation: [
    {
      name: 'main-contact-number-other',
      type: validation.textInput,
      options: {
        minLength: 5,
        maxLength: 15,
      },
      errors: {
        required: 'Their telephone number must be in the correct format, like 01632 960 001, 07700 900 982 or +44 808 157 0192. For international numbers include the country code.',
        maxLength: 'Telephone number must be 15 characters or less.',
      },
    },
  ],
};

module.exports = registerController(config.name, config);
