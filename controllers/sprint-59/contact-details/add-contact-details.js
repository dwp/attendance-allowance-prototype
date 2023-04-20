const {
  urls,
  match, 
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.addContactDetails,
  previous: urls.telephoneNumber,
  next: [
    {
      page: urls.telephoneNumberOther,
      condition: {
        field: urls.addContactDetails,
        value: 'yes',
        match: match.value,
      },
    },
    {
      page: urls.alternativeFormats,
    },
  ],
  validation: [
    {
      name: 'add-contact-details',
      type: validation.radios,
    },
    {
      name: 'add-contact-details-name',
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 75,
      },
      errors: {
        required: 'Enter their full name.',
      },
      condition: {
        field: 'add-contact-details',
        value: 'yes',
      },
    },
  ],
};

module.exports = registerController(config.name, config);
