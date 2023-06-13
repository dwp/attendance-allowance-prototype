const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.surgeryMedicalCentre,
  next: urls.treatmentSurgery,
  previous: urls.specialRulesForm,
  validation: [
    {
      name: 'surgery-medical-centre-name',
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 500,
      },
      errors: {
        required: 'Enter the name of your surgery or medical centre.',
        maxLength: 'Full name must be 500 characters or fewer.',
      },
    },
    {
      name: 'surgery-medical-centre-phone',
      type: validation.textInput,
      options: {
        minLength: 5,
        maxLength: 15,
      },
      errors: {
        required: 'Enter a valid phone number.',
        maxLength: 'Number must be 15 characters or fewer.',
      },
    },
    {
      name: 'surgery-medical-centre-address',
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 200,
      },
      errors: {
        required: 'You must complete this section.',
        maxLength: 'Name must be 200 characters or fewer.',
      },
    },
    {
      name: 'surgery-medical-centre-town',
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 200,
      },
      errors: {
        required: 'You must complete this section.',
        maxLength: 'Name must be 200 characters or fewer.',
      },
    },
    {
      name: 'surgery-medical-centre-county',
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 200,
      },
      errors: {
        required: 'You must complete this section.',
        maxLength: 'Name must be 200 characters or fewer.',
      },
    },
    {
      name: 'address-postcode',
      type: validation.textInput,
      options: {
        minLength: 5,
        maxLength: 9,
      },
      errors: {
        required: 'Enter a post code.',
        minLength: 'Enter a real postcode.',
        maxLength: 'Enter a real postcode.',
      },
    },
  ],
};

module.exports = registerController(config.name, config);
