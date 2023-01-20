const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.illnessDisability,
  next: urls.illnessDisabilityAdded,
  previous: [
    {
      page: urls.careHomeHospital,
      condition: {
        field: urls.careHomeHospital, 
        value: 'yes',
        match: match.value, 
      }, 
    },
    {
      page: urls.sercoCareHomeHospital,
      condition: {
        field: urls.careHomeHospital, 
        value: 'no',
        match: match.value, 
      }, 
    },
  ],
  validation: {
    type: validation.textInput,
    errors: {
      required: 'You need to tell us if you have any illnesses, physical or mental disabilities.',
    },
  },
};

module.exports = registerController(config.name, config);
