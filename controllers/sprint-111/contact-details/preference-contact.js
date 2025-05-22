const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.preferenceContact,
  previous: [
    {
      page: urls.addContactDetails,
      condition: {
        field: urls.addContactDetails,
        value: "helper-number",
        match: match.value,
      },
    },
    {
      page: urls.telephoneNumberOther,
    },
  ],
  next: urls.alternativeFormats,
  validation: {
    type: validation.radios,
    errors: {
      required: 'Select who we should contact first if we have questions',
    },
  },
};

module.exports = registerController(config.name, config);
