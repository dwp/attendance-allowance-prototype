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
        value: 'no',
        match: match.value,
      },
    },
  ],
  next: urls.emailConfirm,
  validation: {
    type: validation.checkboxes,
  },
};

module.exports = registerController(config.name, config);
