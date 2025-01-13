const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.alternativeFormats,
  previous: [
    {
      page: urls.addContactDetails,
      condition: {
        field: urls.addContactDetails,
        value: "no",
        match: match.value,
      },
    },
    {
      page: urls.telephoneNumberOther,
    },
  ],
  next: urls.emailSubmit,
  validation: {
    type: validation.checkboxes,
    errors: {
      required:
        "Select whether we should use a different format when we contact you",
    },
  },
};

module.exports = registerController(config.name, config);
