const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.careHomeFundingTrusts,
  previous: urls.careHomeFundingWho,
  next: urls.specialRulesDeclaration,
  validation: {
    type: validation.radios,
    errors: {
      required: "Select which Health and Social Care Trust you get funding from",
    },
  },
};

module.exports = registerController(config.name, config);
