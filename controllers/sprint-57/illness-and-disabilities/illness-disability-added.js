const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.illnessDisabilityAdded,
  next: [
    {
      page: urls.illnessDisability,
      condition: {
        field: urls.illnessDisabilityAdded,
        value: 'yes',
        match: match.value,
      },
    },
    {
      page: urls.renalDialysis,
      condition: {
        field: urls.illnessDisability,
        value: ['Acute Kidney (renal) failure R21', 'Kidney (renal) Chronic failure R22', 'Kidney (renal) transplantation R23', 'Kidney (renal) transplantation – rejection of R30', 'Kidney (renal) Dialysis (which fulfils the deeming provision criteria)'],
        match: match.anyOne,
      },
    },
    {
      page: urls.specialRulesDeclaration,
      condition: {
        field: urls.illnessDisability,
        value: ['Acute Kidney (renal) failure R21', 'Kidney (renal) Chronic failure R22', 'Kidney (renal) transplantation R23', 'Kidney (renal) transplantation – rejection of R30', 'Kidney (renal) Dialysis (which fulfils the deeming provision criteria)'],
        match: match.none,
      },
    },
  ],
  previous: urls.illnessDisability,
  validation: {
    type: validation.radios,
    errors: {
      required: 'You must select an option.',
    },
  },
};

module.exports = registerController(config.name, config);
