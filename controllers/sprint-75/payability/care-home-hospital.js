const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.careHomeHospital,
  previous: urls.homeAddressSelect,
  next: urls.illnessDisability,
  validation: {
    type: validation.radios,
    errors: {
      required: "Select yes if you are currently in a care home or hospital",
    },
  },
};

module.exports = registerController(config.name, config);
