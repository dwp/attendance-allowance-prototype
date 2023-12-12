const {
    urls,
    match,
    registerController,
  } = require('../../../utils/controller');
  
  const config = {
    name: urls.evidence,
    previous: [
      {
        page: urls.surgeryMedicalCentre,
        condition: {
          field: urls.consent,
          value: 'yes',
          match: match.value,
        },
      },
      {
        page: urls.consent,
      },
    ],
    next: [
      {
        page: urls.checkAnswersDetails,
      },
    ],
  };
  
  module.exports = registerController(config.name, config);
  