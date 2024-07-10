const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.nationalitySwissEea,
  previous: urls.nationalityOther,
  next: urls.residenceCountry,
  validation: {
    type: validation.radios,
    errors: {
      required:
        "Select yes if you are a Swiss or a European Economic Area national and were you living in the United Kingdom before 1 January 2021",
    },
  },
};

module.exports = registerController(config.name, config);
