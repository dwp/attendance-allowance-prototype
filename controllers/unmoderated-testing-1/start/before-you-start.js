const {
  urls,
  options,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.beforeYouStart,
  previous: options.none,
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
      page: urls.whoIsApplying,
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
