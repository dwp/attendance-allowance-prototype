const {
  urls,
  validation,
  registerController,
} = require('../../utils/controller');

const config = {
  name: 'verification-code',
  next: urls.start,
  validation: {
    type: validation.textInput,
    options: {
      minLength: 6,
      maxLength: 6,
    },
    errors: {
      required: 'You need to enter a verification code',
      minLength: 'The token you entered is too short; An example token looks like this, ‘WQ4D79’',
      maxLength: 'The token you entered is too long; An example token looks like this, ‘WQ4D79’',
    },
  },
};

module.exports = registerController('', config);
