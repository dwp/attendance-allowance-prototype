const {
    urls,
    match,
    registerController,
  } = require('../../../utils/controller');
  
  const config = {
    name: urls.evidence,
    previous: [
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
      },
    ],
    next: [
      {
        page: urls.consent,
      },
    ],
  };
  
  module.exports = registerController(config.name, config);
  