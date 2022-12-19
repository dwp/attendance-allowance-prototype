const {
  urls,
  validation,
  match,
  registerController,
} = require('../../utils/controller');

const config = {
  name: urls.benefits,
  next: [
    {
      page: urls.benefitsIneligible,
      condition: {
        field: urls.benefits,
        value: [
          'disability-living-allowance',
          'personal-independence-payment',
          'adult-disability-payment',
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
  },
};

module.exports = registerController(config.name, config);
