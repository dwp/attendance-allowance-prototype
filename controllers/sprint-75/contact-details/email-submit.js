const {
  urls,
  match,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.emailSubmit,
  previous: urls.alternativeFormats,
  next: [
    {
      page: urls.emailConfirm,
      condition: {
        field: urls.emailSubmit,
        value: 'yes',
        match: match.value,
      },
    },
    {
      page: urls.checkAnswersContactDetails,
    },
  ],
  validation: [
    {
      name: "email-submit",
      type: validation.radios,
      errors: {
        required:
          "Select yes if we should send you an email to confirm you have submitted your application",
      },
    },
    {
      name: "contact-by-email",
      type: validation.textInput,
      options: {
        minLength: 3,
        maxLength: 320,
      },
      errors: {
        required: "Enter an email address",
        minLength:
          "Enter an email address in the correct format, like name@example.com",
      },
      condition: {
        field: "email-submit",
        value: "yes",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
