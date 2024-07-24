const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.livingInUk,
  previous: urls.residenceCountry,
  next: urls.countryOutsideUKDuration,
  validation: {
    type: validation.radios,
    errors: {
      required:
        "Select yes if you were you living in the United Kingdom before 1 January 2021",
    },
  },
};

module.exports = registerController(config.name, config);
