const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.addContactDetails,
  previous: urls.telephoneNumber,
  next: urls.telephoneNumber,
  validation: [
    {
      type: validation.radios,
      name: 'add-contact-details',
    },
    {
      name: 'add-contact-details',
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
        value: 'add-contact-yes',
      },
    },
  ],
};

module.exports = registerController(config.name, config);
