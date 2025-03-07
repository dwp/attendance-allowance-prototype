const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.beforeYouStart,
  previous: urls.howToClaim, 
  next: [
    {
      page: urls.beforeYouStartIneligible,
      condition: {
        field: urls.beforeYouStart,
        value: "no",
        match: match.value,
      },
    },
    {
      page: urls.healthConditions,
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required:
        "Select if you have everything you need to apply for Attendance Allowance",
    },
  },
};

module.exports = registerController(config.name, config);
