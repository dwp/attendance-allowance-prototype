const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.countryOutsideUKBenefits,
  previous: urls.countryOutsideUKDuration,
  next: urls.countryOutsideUKWorking,
  validation: {
    type: validation.radios,
    errors: {
      required:
        "Select yes if you, your wife, husband or civil partner getting any pension or benefits from a European Economic Area (EEA) state or Switzerland?",
    },
  },
};

module.exports = registerController(config.name, config);
