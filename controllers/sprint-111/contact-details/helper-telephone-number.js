const {
  urls,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.helperTelephoneNumber,
  previous: urls.telephoneNumber,
  next: urls.addContactDetails,
  validation: [
    {
      name: "helper-telephone-number",
      type: validation.radios,
    },
    {
      name: "helper-telephone-number-input",
      type: validation.textInput,
      options: {
        minLength: 5,
        maxLength: 15,
      },
      errors: {
        required: 'Enter a telephone number, like 01632 960 001, 07700 900 982 or +44 808 157 0192',
        minLength: 'Enter a telephone number, like 01632 960 001, 07700 900 982 or +44 808 157 0192',
        maxLength: 'Enter a telephone number, like 01632 960 001, 07700 900 982 or +44 808 157 0192',
      },
      condition: {
        field: "helper-telephone-number",
        value: "yes",
      },
    },
    {
      type: validation.radios,
      name: "helper-telephone-number",
      errors: {
        required:
          "Select yes if you want to add your telephone number",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
