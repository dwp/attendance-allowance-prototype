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
      page: urls.preferenceContact,
    },
  ],
  next: urls.emailSubmit,
  validation: {
    type: validation.radios,
    errors: {
      required:
        "Select which different format we should use when we contact you",
    },
  },
};

module.exports = registerController(config.name, config);
