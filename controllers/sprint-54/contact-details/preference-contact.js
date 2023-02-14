const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.preferenceContact,
  previous: urls.telephoneNumberOther,
  next: [
    {
      page: urls.residenceCountryIneligible,
      condition: {
        field: urls.residenceCountry,
        value: 'abroad',
        match: match.value,
      },
    },
    {
      page: urls.countryOutsideUKDuration,
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required: 'You must select an option.',
    },
  },
};

module.exports = registerController(config.name, config);
