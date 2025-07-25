const {
  urls,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.helperName,
  previous: urls.manageOwnAffairs,
  next: urls.helpingSomeoneIntro,
  validation: [
    {
      name: "first-name",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 50,
      },
      errors: {
        required: "Enter your first name",
        maxLength: "First name must be 50 characters or less",
      },
    },
    {
      name: "last-name",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 50,
      },
      errors: {
        required: "Enter your last name",
        maxLength: "Last name must be 50 characters or less",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
