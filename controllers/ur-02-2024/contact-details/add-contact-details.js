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
      page: urls.telephoneNumberOther,
      condition: {
        field: urls.addContactDetails,
        value: "yes",
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
      name: "add-contact-details-name",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 100,
      },
      errors: {
        required: "Enter the full name of the other contact",
        maxLength:
          "Enter the full name of the other contact in 100 characters or less",
      },
      condition: {
        field: "add-contact-details",
        value: "yes",
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
