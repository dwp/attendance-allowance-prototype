const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.homeAddressManual,
  next: urls.careHomeHospital,
  previous: urls.homeAddressPostcode,
  validation: [
    {
      name: 'home-address-manual-line-one',
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 500,
      },
      errors: {
        required: 'Enter the first line of your address',
        maxLength: 'Enter the first line of your address in 500 characters or less',
      },
    },
    {
      name: 'home-address-manual-town',
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 200,
      },
      errors: {
        required: 'Enter a town or city',
        maxLength: 'Enter a town or city in 200 characters or less',
      },
    },
    {
      name: 'home-address-manual-postcode',
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 8,
      },
      errors: {
        required: 'Enter a postcode',
        maxLength: 'Enter a postcode in the correct format',
      },
    },
    
  ],
};

module.exports = registerController(config.name, config);
