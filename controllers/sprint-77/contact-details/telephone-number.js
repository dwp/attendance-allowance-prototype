const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.telephoneNumber,
  previous: [
    {
      page: urls.checkAnswersSpecialRules,
      condition: {
        field: urls.specialRulesDeclaration,
        value: "yes",
        match: match.value,
      },
    },
    {
      page: urls.checkAnswersStartDate,
    },
  ],
  next: urls.addContactDetails,
  validation: [
    {
      name: "main-contact-number",
      type: validation.textInput,
      options: {
        minLength: 5,
        maxLength: 15,
      },
      errors: {
        required: "Enter a UK telephone number",
        maxLength:
          "Enter a UK telephone number, like 01632 960 001 or 07700 900 982",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
