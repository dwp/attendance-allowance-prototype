const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.homeAddressPostcode,
  previous: urls.fullName,
  next: urls.homeAddressSelect,
  validation: {
    type: validation.textInput,
    options: {
      minLength: 5,
      maxLength: 9,
    },
    errors: {
      required: 'Enter a postcode.',
      minLength: 'Enter a real postcode.',
      maxLength: 'Enter a real postcode.',
    },
  },
};

module.exports = registerController(config.name, config);
