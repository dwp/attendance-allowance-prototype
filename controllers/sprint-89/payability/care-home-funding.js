const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.careHomeFunding,
  previous: urls.careHomeAddress,
  next: [
    {
      page: urls.illnessDisability,
      condition: {
        field: urls.careHomeFunding,
        value: [
          "yes-self-funded",
          "yes-selling-home",
          "assessment",
          "i-do-not-know",
        ],
        match: match.value,
      },
    },
    {
      page: urls.careHomeFundingWho,
      condition: {
        field: urls.careHomeFunding,
        value: "no-get-funding",
        match: match.value,
      },
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required: "Select if you pay for the full cost of your care or nursing home",
    },
  },
};

module.exports = registerController(config.name, config);
