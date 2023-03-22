const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.specialRulesDeclaration,
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
      page: urls.personClaimingIneligible,
      condition: {
        field: urls.specialRulesDeclaration,
        value: 'yes',
        match: match.value,
      },
    },
    {
      page: urls.treatmentSurgery,
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required: 'You must enter either yes or no.',
    },
  },
};

module.exports = registerController(config.name, config);
