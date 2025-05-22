const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.careHomeHospital,
  previous: urls.specialRulesDeclaration,
  next: [
    {
      page: urls.healthConditions,
      condition: {
        field: urls.careHomeHospital,
        value: "hospital",
        match: match.value,
      },
    },
    {
      page: urls.healthConditions,
      condition: {
        field: urls.careHomeHospital,
        value: "care-nursing-home",
        match: match.value,
      },
    },
    {
      page: urls.healthConditions,
      condition: {
        field: urls.careHomeHospital,
        value: "hospice",
        match: match.value,
      },
    },
    {
      page: urls.healthConditions,
      condition: {
        field: urls.careHomeHospital,
        value: "similar-place",
        match: match.value,
      },
    },
    {
      page: urls.healthConditions,
      condition: {
        field: urls.specialRulesDeclaration,
        value: "yes",
        match: match.value,
      },
    },
    {
      page: urls.healthConditions,
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required: "Select if they are staying in any of these places at the moment",
    },
  },
};

module.exports = registerController(config.name, config);
