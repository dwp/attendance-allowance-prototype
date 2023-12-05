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
      page: urls.sercoCareHomeHospital,
      condition: {
        field: urls.careHomeHospital,
        value: "no",
        match: match.value,
      },
    },
    {
      page: urls.illnessDisability,
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required: "Select yes if you are currently in a care home or hospital",
    },
  },
};

module.exports = registerController(config.name, config);
