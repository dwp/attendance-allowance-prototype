const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.healthConditionsAdded,
  previous: urls.healthConditions,
  next: [
    {
      page: urls.healthConditions,
      condition: {
        field: urls.healthConditionsAdded,
        value: "yes",
        match: match.value,
      },
    },
    {
      page: urls.consent,
    }
  ],
  validation: {
    type: validation.radios,
    errors: {
      required: "Select yes if you have another health condition or disability",
    },
  },
};

module.exports = registerController(config.name, config);
