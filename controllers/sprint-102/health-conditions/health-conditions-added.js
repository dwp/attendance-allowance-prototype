const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.healthConditionsAdded,
  next: [
    {
      page: urls.checkAnswersDetails,
      condition: {
        field: urls.healthConditionsAdded,
        value: "no",
        match: match.value,
      },
    },
    {
      page: urls.healthConditions,
      condition: {
        field: urls.healthConditionsAdded,
        value: "yes",
        match: match.value,
      },
    }
  ],
  previous: urls.healthConditions,
  validation: {
    type: validation.radios,
    errors: {
      required: "Select yes if you have another health condition or disability",
    },
  },
};

module.exports = registerController(config.name, config);
