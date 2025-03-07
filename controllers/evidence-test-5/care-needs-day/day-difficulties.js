const {
  urls,
  match,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.dayDifficulties,
  previous: [
    {
      page: urls.gpDetails,
      condition: {
        field: urls.consent,
        value: 'yes',
        match: match.value,
      },
    },
    {
      page: urls.consent,
    },
  ],
  next: urls.nightDifficulties,
  validation: {
    type: validation.checkboxes,
    errors: {
      required:
        "Select the activities you have difficulty or need help with during the day",
    },
  },
};

module.exports = registerController(config.name, config);
