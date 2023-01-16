const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.nationality,
  previous: urls.otherBenefits,
  next: [
    {
      page: urls.nationalityOther,
      condition: {
        field: urls.nationality,
        value: 'other',
        match: match.value,
      },
    },
    {
      page: urls.residenceCountry,
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required: 'Select if you are British or Irish, or a citizen of a different country.',
    },
  },
};

module.exports = registerController(config.name, config);
