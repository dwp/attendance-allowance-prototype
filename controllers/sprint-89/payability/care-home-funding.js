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
      required: "Select if you are self funded, selling your home or assets, waiting for an assessment, get funding, or you do not know",
    },
  },
};

module.exports = registerController(config.name, config);
