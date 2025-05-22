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
        page: urls.checkAnswersDetails,
      },
    ],
    validation: {
      type: validation.radios,
      errors: {
        required: 'Select yes if the person you are helping to apply gives consent for their GP or other healthcare professionals to share information about their health conditions with DWP',
      },
    },
  };

  module.exports = registerController(config.name, config);
  