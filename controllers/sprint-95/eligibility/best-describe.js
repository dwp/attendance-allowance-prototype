const {
    urls,
    validation,
    match,
    registerController,
  } = require('../../../utils/controller');
  
  const config = {
    name: urls.bestDescribe,
    previous: urls.whoIsApplying,
    next: [
      {
        page: urls.helpingSomeoneIntro,
        condition: {
          value: 'SPECIAL_RULES',
          match: match.session,
        },
      },
      {
        page: urls.helpingSomeoneIntro,
        condition: {
          field: urls.bestDescribe,
          value: 'friend',
          match: match.value,
        },
      },
      {
        page: urls.helpingSomeoneIntro,
        condition: {
          field: urls.bestDescribe,
          value: 'charity',
          match: match.value,
        },
      },
      {
        page: urls.personClaimingIneligible,
      },
    ],
    validation: {
      type: validation.radios,
      errors: {
        required: 'Select the option that best describes you',
      },
    },
  };
  
  module.exports = registerController(config.name, config);
  