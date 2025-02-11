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
        page: urls.supportingDocumentsIntro,
        condition: {
          field: urls.supportingDocumentsIntro,
          value: 'no',
          match: match.value,
        },
      },
      {
        page: urls.supportingDocumentsOptions,
        condition: {
          field: urls.supportingDocumentsOptions,
          value: 'no-documents',
          match: match.value,
        },
      },
      {
        page: urls.supportingDocumentsUploadLater,
        condition: {
          field: urls.supportingDocumentsEmailLink,
          value: 'no',
          match: match.value,
        },
      },
      {
        page: urls.supportingDocumentsEmailAddress,
        condition: {
          field: urls.supportingDocumentsEmailLink,
          value: 'yes',
          match: match.value,
        },
      },
      {
        page: urls.supportingDocumentsPost,
        condition: {
          field: urls.supportingDocumentsOptions,
          value: 'post',
          match: match.value,
        },
      },
      {
        page: urls.treatmentSurgery,
      },
    ],
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
  