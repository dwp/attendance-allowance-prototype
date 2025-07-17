const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.careHomeHospital,
  previous: urls.specialRulesDeclaration,
  next: urls.healthConditions,
  validation: {
    type: validation.radios,
    errors: {
      required: "Select if you are staying in any of these places at the moment",
    },
  },
};

module.exports = registerController(config.name, config);
