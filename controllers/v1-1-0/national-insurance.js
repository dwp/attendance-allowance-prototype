const {
  urls,
  validation,
  registerController,
} = require('../../utils/controller');

const config = {
  name: urls.nationalInsurance,
  next: urls.fullName,
  validation: {
    type: validation.textInput,
    options: {
      minLength: 9,
      maxLength: 9,
    },
    errors: {
      required: 'Enter a National Insurance number',
      minLength: 'Enter a National Insurance number that is 2 letters, 6 numbers, then A, B, C or D, like QQ123456C',
      maxLength: 'Enter a National Insurance number that is 2 letters, 6 numbers, then A, B, C or D, like QQ123456C',
    },
  },
};

module.exports = registerController(config.name, config);
