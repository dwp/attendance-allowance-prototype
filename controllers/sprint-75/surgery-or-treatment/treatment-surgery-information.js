const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.treatmentSurgeryInformation,
  previous: urls.treatmentSurgery,
  next: [
    {
      page: urls.checkAnswersSpecialRules,
      condition: {
        field: urls.specialRulesDeclaration,
        value: 'yes',
        match: match.value,
      },
    },
    {
      page: urls.consent,
    },
  ],

  validation: {
    type: validation.textInput,
    errors: {
      required: 'We need to know what other treatments you receive or whether you are waiting for surgery.',
    },
  },
};

module.exports = registerController(config.name, config);
