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
        required: 'Enter the first line of your address where you currently live.',
        maxLength: 'Address must be 500 characters or fewer.',
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
        required: 'You must enter a town or city where you currently live.',
        maxLength: 'Town or city must be 200 characters or fewer.',
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
        required: 'Enter a postcode where you currently live.',
        maxLength: 'Postcode must be 8 characters or fewer.',
      },
    },
    
  ],
};

module.exports = registerController(config.name, config);
