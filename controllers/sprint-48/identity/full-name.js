const {
  urls,
  options,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.fullName,
  previous: urls.nationalInsurance,
  next: urls.homeAddressPostcode,
  validation: [
    {
      name: 'first-name',
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 75,
      },
      errors: {
        required: 'Enter your first name.',
        maxLength: 'First name must be 75 characters or fewer.',
      },
    },
    {
      name: 'last-name',
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 100,
      },
      errors: {
        required: 'Enter your last name.',
        maxLength: 'Last name must be 100 characters or fewer.',
      },
    },
  ],
};

module.exports = registerController(config.name, config);
