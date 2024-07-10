const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.residenceCountry,
  previous: [
    {
      page: urls.nationalitySwissEea,
      condition: {
        field: urls.nationality,
        value: "other",
        match: match.value,
      },
    },
    {
      page: urls.nationality,
    },
  ],
  next: [
    {
      page: urls.residenceCountryNorthernIreland,
      condition: {
        field: urls.residenceCountry,
        value: 'northern-ireland',
        match: match.value,
      },
    },
    {
      page: urls.residenceCountryIneligible,
      condition: {
        field: urls.residenceCountry,
        value: 'abroad',
        match: match.value,
      },
    },
    {
      page: urls.countryOutsideUKDuration
    },
  ],

  validation: {
    type: validation.radios,
    errors: {
      required: "Select the country where you live",
    },
  },
};

module.exports = registerController(config.name, config);
