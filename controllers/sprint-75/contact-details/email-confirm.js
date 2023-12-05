const {
  urls,
  match,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.emailConfirm,
  previous: urls.alternativeFormats,
  next: urls.checkAnswersContactDetails,
  validation: [
    {
      name: "email-confirm",
      type: validation.radios,
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
        field: "email-confirm",
        value: "yes",
      },
    },
    {
      name: "contact-by-email-confirm",
      type: validation.match,
      options: {
        matchTo: "contact-by-email",
      },
      errors: {
        required:
          "Select yes if you want an email to confirm we have received your application",
      },
      condition: {
        field: "email-confirm",
        value: "yes",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
