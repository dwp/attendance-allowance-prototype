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
      required: 'Enter what treatment or surgery you are having and any dates',
    },
  },
};

module.exports = registerController(config.name, config);
