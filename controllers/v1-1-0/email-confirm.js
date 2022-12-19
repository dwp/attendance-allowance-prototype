const {
  urls,
  validation,
  registerController,
} = require('../../utils/controller');

const config = {
  name: urls.emailConfirm,
  next: urls.checkYourAnswers,
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
        required: 'Enter an email address',
        minLength: 'Enter a valid email address',
      },
      condition: {
        field: 'email-confirm',
        value: 'yes',
      },
    },
    {
      name: 'contact-by-email-confirm',
      type: validation.textInput,
      condition: {
        field: 'email-confirm',
        value: 'yes',
      },
    },
  ],
};

module.exports = registerController(config.name, config);
