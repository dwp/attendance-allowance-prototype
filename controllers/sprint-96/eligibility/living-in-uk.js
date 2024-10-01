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
        "Select if you were living in the UK before 1 January 2021",
    },
  },
};

module.exports = registerController(config.name, config);
