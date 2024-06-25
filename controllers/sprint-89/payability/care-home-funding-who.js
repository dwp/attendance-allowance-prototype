const {
  urls,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.careHomeFundingWho,
  previous: urls.careHomeFunding,
  next: urls.illnessDisability,
  validation: {
    type: validation.radios,
    errors: {
      required: "Select who you get funding from or if you do not know",
    },
  },
};

module.exports = registerController(config.name, config);
