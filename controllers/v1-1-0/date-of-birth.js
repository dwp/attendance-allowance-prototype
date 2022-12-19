const {
  urls,
  validation,
  match,
  registerController,
} = require('../../utils/controller');

const config = {
  name: urls.dob,
  next: [
    {
      page: urls.dobIneligible,
      condition: {
        field: 'date-of-birth-year',
        value: 1955,
        match: match.greaterThan,
      },
    },
    {
      page: urls.benefits,
    },
  ],
  validation: {
    type: validation.dateInput,
  },
};

module.exports = registerController(config.name, config);
