const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.homeAddressInternational,
  next: urls.careHomeHospital,
  previous: urls.homeAddressSelect,
  validation: [
    {
      name: 'home-address-international-line-one',
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 500,
      },
      errors: {
        required: 'Enter the first line of your address',
        maxLength: 'Enter the first line of your address in 200 characters or less',
      },
    },
    {
      name: 'home-address-international-town',
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
      name: 'home-address-international-country',
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 200,
      },
      errors: {
        required: 'Enter a country',
        maxLength: 'Enter a country in 200 characters or less',
      },
    },
    
  ],
};

module.exports = registerController(config.name, config);
