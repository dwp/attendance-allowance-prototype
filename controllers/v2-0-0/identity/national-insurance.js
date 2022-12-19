const {
  urls,
  match,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.nationalInsurance,
  previous: [
    {
      page: urls.countryOutsideUKDuration,
      condition: {
        field: urls.countryOutsideUK,
        value: 'yes',
        match: match.value,
      },
    },
    {
      page: urls.countryOutsideUK,
    },
  ],
  next: urls.fullName,
  validation: {
    type: validation.textInput,
    options: {
      regEx: '^[a-zA-Z]\\s*[a-zA-Z](?:\\s*\\d\\s*){6}\\s*[a-dA-D]?\s*$',
    },
    errors: {
      required: 'Enter a National Insurance number in the correct format.',
      regEx: 'Enter a National Insurance number that is 2 letters, 6 numbers, then A, B, C or D, like QQ123456C.',
    },
  },
};

module.exports = registerController(config.name, config);
