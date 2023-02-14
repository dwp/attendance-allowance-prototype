const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.emailConfirm,
  previous: urls.preferenceContact,
  next: urls.alternativeFormats,
  validation: [
    {
      name: 'email-confirm',
      type: validation.radios,
    },
    {
      name: 'contact-by-email',
      type: validation.textInput,
      options: {
        minLength: 3,
        maxLength: 320,
      },
      errors: {
        required: 'Enter an email address.',
        minLength: 'Enter a valid email address.',
      },
      condition: {
        field: 'email-confirm',
        value: 'yes',
      },
    },
    {
      name: 'contact-by-email-confirm',
      type: validation.match,
      options: {
        matchTo: 'contact-by-email',
      },
      errors: {
        required: 'Enter a valid email address.',
      },
      condition: {
        field: 'email-confirm',
        value: 'yes',
      },
    },
  ],
};

module.exports = registerController(config.name, config);
