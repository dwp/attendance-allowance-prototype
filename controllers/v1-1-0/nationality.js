const {
  urls,
  validation,
  match,
  registerController,
} = require('../../utils/controller');

const config = {
  name: urls.nationality,
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
      page: urls.country,
    },
  ],
  validation: {
    type: validation.radios,
  },
};

module.exports = registerController(config.name, config);
