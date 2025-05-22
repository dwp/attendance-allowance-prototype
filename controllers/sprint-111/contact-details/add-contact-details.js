const {
  urls,
  match,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.addContactDetails,
  previous: urls.telephoneNumber,
  next: [
    {
      page: urls.preferenceContact,
      condition: {
        field: urls.addContactDetails,
        value: "helper-number",
        match: match.value,
      },
    },
    {
      page: urls.telephoneNumberOther,
      condition: {
        field: urls.addContactDetails,
        value: "someone-else",
        match: match.value,
      },
    },
    {
      page: urls.alternativeFormats,
    },
  ],
  validation: [
    {
      name: "add-contact-details",
      type: validation.radios,
    },
    {
      name: 'helper-number-input',
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
        field: "add-contact-details",
        value: "helper-number",
      },
    },
    {
      type: validation.radios,
      name: "add-contact-details",
      errors: {
        required:
          "Select yes if you want to add contact details for someone else",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
