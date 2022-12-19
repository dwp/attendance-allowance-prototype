const {
  urls,
  validation,
  match,
  registerController,
} = require('../../utils/controller');

const config = {
  name: urls.country,
  next: [
    {
      page: urls.countryIneligible,
      condition: {
        field: urls.country,
        value: 'abroad',
        match: match.value,
      },
    },
    {
      page: urls.countryOutsideUK,
    },
  ],
  validation: {
    type: validation.radios,
  },
};

module.exports = registerController(config.name, config);
