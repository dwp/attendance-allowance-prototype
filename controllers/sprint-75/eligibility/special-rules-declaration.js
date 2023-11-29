const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.specialRulesDeclaration,
  previous: [
    {
      page: urls.bestDescribe,
      condition: {
        field: urls.bestDescribe,
        value: 'friend',
        match: match.value,
      },
    },
    {
      page: urls.bestDescribe,
      condition: {
        field: urls.bestDescribe,
        value: 'charity',
        match: match.value,
      },
    },
    {
      page: urls.whoIsApplying,
    },
  ],
  next: [
    {
      page: urls.whoIsApplyingIneligible,
      condition: {
        field: urls.specialRulesDeclaration,
        value: 'yes',
        match: match.value,
      },
    },
    {
      page: urls.specialRulesDeclaration,
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required: 'You must enter either yes or no.',
    },
  },
};

module.exports = registerController(config.name, config);
