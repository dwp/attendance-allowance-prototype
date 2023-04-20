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
      name: 'add-contact-details-name',
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 100,
      },
      errors: {
        required: 'Enter their full name.',
        maxLength: 'Your answer must be 100 characters or less.',
      },
      condition: {
        field: 'add-contact-details',
        value: 'yes',
      },
    },
    {
      type: validation.radios,
      name: 'add-contact-details',
    },
  ],
};

module.exports = registerController(config.name, config);
