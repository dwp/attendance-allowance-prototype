const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.whoIsApplying,
  previous: urls.beforeYouStart,
  next: [
    {
      page: urls.specialRulesDeclaration,
      condition: {
        field: urls.whoIsApplying,
        value: 'myself',
        match: match.value,
      },
    },
    {
      page: urls.bestDescribe,
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required: 'Select who is applying.',
    },
  },
};

module.exports = registerController(config.name, config);
