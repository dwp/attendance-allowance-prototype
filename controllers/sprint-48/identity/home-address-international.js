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
        required: 'You must complete this section.',
        maxLength: 'Address must be 500 characters or fewer.',
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
        required: 'You must complete this section.',
        maxLength: 'Town must be 200 characters or fewer.',
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
        required: 'You must complete this section.',
        maxLength: 'Country must be 200 characters or fewer.',
      },
    },
    
  ],
};

module.exports = registerController(config.name, config);
