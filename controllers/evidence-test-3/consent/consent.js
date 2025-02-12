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
        page: urls.evidence,
        condition: {
          field: urls.supportingDocumentsIntro,
          value: 'no',
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
        page: urls.evidence,
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
  