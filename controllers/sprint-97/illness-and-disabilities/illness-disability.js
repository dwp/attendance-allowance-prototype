const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.illnessDisability,
  next: urls.illnessDisabilityDate,
  previous: [
    {
      page: urls.specialRulesDeclaration,
      condition: {
        field: urls.specialRulesDeclaration,
        value: "no",
        match: match.value,
      },
    },
    {
      page: urls.specialRulesFormCompleted,
      condition: {
        field: urls.specialRulesDeclaration,
        value: "yes",
        match: match.value,
      },
    },
  ],
  validation: {
    type: validation.textInput,
    options: {
      minLength: 1,
      maxLength: 200,
    },
    errors: {
      required: 'Enter the name of your health condition or disability',
      maxLength: "Enter the name of your health condition or disability in 200 characters or less",
    },
  },
};

module.exports = registerController(config.name, config);
