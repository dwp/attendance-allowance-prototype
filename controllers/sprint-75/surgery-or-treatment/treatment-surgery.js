const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.treatmentSurgery,
  previous: urls.illnessDisabilityAdded,
  next: [
    {
      page: urls.treatmentSurgeryInformation,
      condition: {
        field: urls.treatmentSurgery,
        value: 'yes',
        match: match.value,
      },
    },
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
  validation:
{
  type: validation.radios,
  errors: {
    required: 'You must enter either yes or no.',
  },
},
};

module.exports = registerController(config.name, config);
