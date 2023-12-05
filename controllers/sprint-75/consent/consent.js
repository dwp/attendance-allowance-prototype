const {
    urls,
    validation,
    match,
    registerController,
  } = require('../../../utils/controller');
  
  
  const config = {
    name: urls.consent,
    previous: [
      {
        page: urls.treatmentSurgeryInformation,
        condition: {
          field: urls.treatmentSurgery,
          value: 'yes',
          match: match.value,
        },
      },
      {
        page: urls.treatmentSurgery,
      },
    ],
    next: [
      {
        page: urls.surgeryMedicalCentre,
        condition: {
          field: urls.consent,
          value: 'yes',
          match: match.value,
        },
      },
      {
        page: urls.evidence,
      },
    ],
    validation: {
      type: validation.radios,
      errors: {
        required: 'Select yes, if you agree that information about your health can be shared with DWP or the healthcare professionals that work for them.',
      },
    },
  };

  module.exports = registerController(config.name, config);
  