const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.otherBenefits,
  previous: urls.birthDate,
  next: [
    {
      page: urls.attendanceAllowanceIneligible,
      condition: {
        field: urls.otherBenefits,
        value: ["attendance-allowance"],
        match: match.anyOne,
      },
    },
    {
      page: urls.otherBenefitsIneligible,
      condition: {
        field: urls.otherBenefits,
        value: [
          "disability-living-allowance",
          "personal-independence-payment",
          "adult-disability-payment",
        ],
        match: match.anyOne,
      },
    },
    {
      page: urls.nationality,
    },
  ],
  validation: {
    type: validation.checkboxes,
    errors: {
      required: "Select which benefit you get",
    },
  },
};

module.exports = registerController(config.name, config);
