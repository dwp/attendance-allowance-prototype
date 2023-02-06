const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.treatmentSurgery,
  previous: [
    {
      page: urls.renalDialysis,
      condition: {
        field: urls.renalDialysis,
        value: 'no',
        match: match.value,
      },
    },
    {
      page: urls.renalDialysisWhere,
      condition: {
        field: urls.renalDialysisWhere,
        value: 'hospital',
        match: match.value,
      },
    },
    {
      page: urls.renalDialysisHelp,
    },
  ],
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
      page: urls.checkAnswersDetails,
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
