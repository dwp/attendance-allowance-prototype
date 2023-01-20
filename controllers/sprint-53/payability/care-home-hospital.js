const {
  urls,
  validation,
  match, 
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.careHomeHospital,
  previous: urls.homeAddressSelect,
  next: [
    {
      page: urls.sercoCareHomeHospital,
      condition: {
        field: urls.careHomeHospital, 
        value: 'no',
        match: match.value, 
      },
    }, 
    {
      page: urls.illnessDisability,
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required: 'You must select an option.',
    },
  },
};

module.exports = registerController(config.name, config);
