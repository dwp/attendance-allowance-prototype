const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.countryOutsideUKDuration,
  previous: urls.residenceCountry,
  next: [
    {
      page: urls.countryOutsideUKDurationInelgible,
      condition: {
        field: urls.countryOutsideUKDuration,
        value: "yes",
        match: match.value,
      },
    },
    {
      page: urls.nationalInsurance,
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required:
        "Select yes if you have been outside the UK more than 12 months in the last 3 years",
    },
  },
};

module.exports = registerController(config.name, config);
