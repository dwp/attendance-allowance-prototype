const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.careHomeHospital,
  previous: urls.homeAddressSelect,
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
      page: urls.illnessDisability,
      condition: {
        field: urls.careHomeAddress,
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
      page: urls.otherAccommodationAddress,
      condition: {
        field: urls.careHomeHospital,
        value: "other-accommodation",
        match: match.value,
      },
    },
    {
      page: urls.illnessDisability,
      condition: {
        field: urls.careHomeHospital,
        value: "no-care-home-hospital",
        match: match.value,
      },
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required: "Select if you are staying in a hospital, care or nursing home, hospice, other, or none of these",
    },
  },
};

module.exports = registerController(config.name, config);
