const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.careHomeHospital,
  previous: urls.telephoneNumber,
  next: [
    {
      page: urls.hospitalAddress,
      condition: {
        field: urls.careHomeHospital,
        value: "hospital",
        match: match.value,
      },
    },
    {
      page: urls.careHomeAddress,
      condition: {
        field: urls.careHomeHospital,
        value: "care-nursing-home",
        match: match.value,
      },
    },
    {
      page: urls.hospiceAddress,
      condition: {
        field: urls.careHomeHospital,
        value: "hospice",
        match: match.value,
      },
    },
    {
      page: urls.similarPlaceAddress,
      condition: {
        field: urls.careHomeHospital,
        value: "similar-place",
        match: match.value,
      },
    },
    {
      page: urls.specialRulesDeclaration,
      condition: {
        field: urls.careHomeHospital,
        value: "none",
        match: match.value,
      },
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required: "Select if you are staying in any of these places at the moment",
    },
  },
};

module.exports = registerController(config.name, config);
