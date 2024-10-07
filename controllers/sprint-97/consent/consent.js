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
        page: urls.illnessDisabilityAdded,
        condition: {
          field: urls.specialRulesDeclaration,
          value: 'yes',
          match: match.value,
        },
      },
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
        page: urls.checkAnswersDetails,
        condition: {
          field: urls.specialRulesDeclaration,
          value: 'yes',
          match: match.value,
        },
      },
      {
        page: urls.evidence,
        condition: {
          field: urls.specialRulesDeclaration,
          value: 'no',
          match: match.value,
        },
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
  