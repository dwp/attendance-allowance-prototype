const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.otherBenefits,
  previous: urls.birthDate,
  next: [
    {
      page: urls.otherBenefitsIneligible,
      condition: {
        field: urls.otherBenefits,
        value: [
          'disability-living-allowance',
          'personal-independence-payment',
          'adult-disability-payment',
          'attendance-allowance',
        ],
        match: match.anyOne,
      },
    },
    {
      page: urls.nationality,
    },
  ],
  validation: {
    type: validation.checkboxes,
    errors: {
      required: 'You must complete this section - select one or more of the options.',
    },
  },
};

module.exports = registerController(config.name, config);
