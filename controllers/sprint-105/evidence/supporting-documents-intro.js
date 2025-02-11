const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.supportingDocumentsIntro,
  previous: [
    {
      page: urls.treatmentSurgeryInformation,
      condition: {
        field: urls.treatmentSurgery,
        value: "yes",
        match: match.value,
      },
    },
    {
      page: urls.treatmentSurgery,
    },
  ],
  next: [
    {
      page: urls.supportingDocumentsOptions,
      condition: {
        field: urls.supportingDocumentsIntro,
        value: "yes",
        match: match.value,
      },
    },
    {
      page: urls.consent,
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required: 'Select yes if you have any supporting documents to confirm what you have told us',
    },
  },
};

module.exports = registerController(config.name, config);
