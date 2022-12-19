const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.telephoneNumber,
  previous: [
    {
      page: urls.checkAnswersSpecialRules,
      condition: {
        field: urls.specialRulesDeclaration,
        value: 'yes',
        match: match.value,
      },
    },
    {
      page: urls.checkAnswersNight,
    },
  ],
  next: urls.alternativeFormats,
  validation: [
    {
      name: 'main-contact-number',
      type: validation.textInput,
      options: {
        minLength: 5,
        maxLength: 15,
      },
      errors: {
        required: 'Enter a telephone number',
        maxLength: 'Number must be 15 characters or fewer.',
      },
    },
  ],
};

module.exports = registerController(config.name, config);
