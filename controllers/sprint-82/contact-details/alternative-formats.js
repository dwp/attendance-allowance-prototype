const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.alternativeFormats,
  previous: urls.welshLanguageWrite,
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
