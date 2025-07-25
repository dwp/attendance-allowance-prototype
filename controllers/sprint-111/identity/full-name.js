const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.fullName,
  previous: [
    {
      page: urls.beforeYouStart,
      condition: {
        field: urls.manageOwnAffairs,
        value: 'yes',
        match: match.value,
      },
    },
    {
      page: urls.nationalInsurance,
    },
  ],
  next: [
    {
      page: urls.helperName,
      condition: {
        field: urls.manageOwnAffairs,
        value: 'yes',
        match: match.value,
      },
    },
    {
      page: urls.homeAddressPostcode,
    },
  ],
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
