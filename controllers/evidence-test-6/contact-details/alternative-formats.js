const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.alternativeFormats,
  previous: urls.addContactDetails,
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
