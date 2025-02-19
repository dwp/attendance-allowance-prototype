const {
    urls,
    validation,
    match,
    registerController,
  } = require('../../../utils/controller');
  
  
  const config = {
    name: urls.consent,
    previous: urls.healthConditionsAdded,
    next: [
      {
        page: urls.gpDetails,
        condition: {
          field: urls.consent,
          value: 'yes',
          match: match.value,
        },
      },
      {
        page: urls.dayDifficulties,
      },
    ],
    validation: {
      type: validation.radios,
      errors: {
        required: 'Select yes if you give consent for your GP or other healthcare professionals to share information about your health conditions with DWP',
      },
    },
  };

  module.exports = registerController(config.name, config);
  