const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.alternativeFormats,
  previous: [
    {
      page: urls.emailConfirm,
    },
  ],
  next: urls.checkAnswersContactDetails,
  validation: {
    type: validation.checkboxes,
  },
};

module.exports = registerController(config.name, config);
