const {
  urls,
  validation,
  registerController,
} = require('../../utils/controller');

const config = {
  name: urls.fullName,
  next: urls.homeAddressPostcode,
  validation: {
    type: validation.textInput,
    options: {
      minLength: 1,
      maxLength: 500,
    },
    errors: {
      required: 'Enter your full name',
      maxLength: 'Full name must be 500 characters or fewer.',
    },
  },
};

module.exports = registerController(config.name, config);
