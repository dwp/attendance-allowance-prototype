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
      condition: {
        field: urls.renalDialysisHelp, 
        value: 'yes', 
        match: match.value,
      }, 
    },
    {
      page: urls.renalDialysisHelp,
      condition: {
        field: urls.renalDialysisHelp, 
        value: 'no', 
        match: match.value,
      }, 
    },
    {
      page: urls.illnessDisabilityAdded,
      condition: {
        field: urls.illnessDisability,
        value: ['Kidney disease or disorder', 'Renal failure - acute', 'Acute kidney disease (AKD)', 'Chronic kidney failure / renal failure', 'Kidney transplantation / renal', 'Transplant rejection - kidney / renal'],
        match: match.none,
      },
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
