const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.whoIsApplying,
  previous: [
    {
      page: urls.claimType,
      condition: {
        field: urls.claimType,
        value: 'new-claim',
        match: match.value,
      },
    },
    {
      page: urls.howToClaim,
    },  
  ],
  next: [
    {
      page: urls.birthDate,
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
      required: 'Select who is applying',
    },
  },
};

module.exports = registerController(config.name, config);
