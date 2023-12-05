const {
  urls,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.safeDayWhy,
  previous: [
    {
      page: urls.safeDayNight,
    },
  ],
  next: [
    {
      page: urls.safeDayLength,
    },
  ],
  validation: [
    {
      name: "safe-day-why-something-else",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 200,
      },
      errors: {
        required:
          "You must explain why you need someone to help you stay safe at home",
        maxLength:
          "Explain why you need someone to help you stay safe at home using 200 characters or less",
      },
      condition: {
        field: "safe-day-why",
        value: "something-else",
      },
    },
    {
      name: "safe-day-why",
      type: validation.checkboxes,
      errors: {
        required: "Select why you need someone to help you stay safe at home",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
