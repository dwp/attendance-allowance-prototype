const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

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
  ],
  next: urls.emailConfirm,
  validation: {
    type: validation.checkboxes,
    errors: {
      required:
        "Select yes if you need us to use a different format when we contact you",
    },
  },
};

module.exports = registerController(config.name, config);
