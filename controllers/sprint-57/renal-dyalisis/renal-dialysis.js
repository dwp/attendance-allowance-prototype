const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.renalDialysis,
  previous: [
    {
      page: urls.illnessDisability,
      condition: {
        field: urls.specialRulesDeclaration,
        value: 'yes',
        match: match.value,
      },
    },
    {
      page: urls.illnessDisability,
    },
  ],
  next: [
    {
      page: urls.renalDialysisWhere,
      condition: {
        field: urls.renalDialysis,
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
