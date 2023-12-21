const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.emailConfirm,
  previous: urls.emailSubmit,
  next: urls.checkAnswersContactDetails,
  validation: [
    {
      name: 'contact-by-email',
      type: validation.textInput,
      options: {
        minLength: 3,
        maxLength: 254,
      },
      errors: {
        required: 'Enter an email address in the correct format, like name@example.com',
        maxLength: 'Enter an email address using 254 characters or less',
      },
    },
    {
      name: 'contact-by-email-confirm',
      type: validation.match,
      options: {
        matchTo: 'contact-by-email',
      },
      errors: {
        required: 'Enter your email address again to confirm it is correct',
        mustMatch: 'Enter a matching email address',
      },
    },
  ],
};

module.exports = registerController(config.name, config);

