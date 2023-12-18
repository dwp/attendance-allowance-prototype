const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.emailConfirm,
  previous: urls.emailSubmit,
  next: [
    {
      page: urls.emailSubmit,
      condition: {
        field: urls.emailConfirm,
        value: 'no',
        match: match.value,
      },
    },
    {
      page: urls.checkAnswersContactDetails,
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required: 'Select yes if this email is correct',
    },
  },
};

module.exports = registerController(config.name, config);
