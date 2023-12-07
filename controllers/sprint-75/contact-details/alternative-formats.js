const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.alternativeFormats,
  previous: urls.addContactDetails,
  next: urls.emailSubmit,
  validation: {
    type: validation.checkboxes,
    errors: {
      required:
        "Select yes if you need us to use a different format when we contact you",
    },
  },
};

module.exports = registerController(config.name, config);
