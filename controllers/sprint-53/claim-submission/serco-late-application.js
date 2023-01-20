const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.sercoLateApplication,
  next: urls.claimSubmission,
  previous: urls.checkAnswersContactDetails,
  validation: {
    name: 'serco-late-application',
    type: validation.textInput,
    options: {
      minLength: 1,
      maxLength: 100,
    },
    errors: {
      required: 'Enter a reason why you are submitting your application late.',
      maxLength: 'Reason must be 100 characters or fewer.',
    },
  },
};

module.exports = registerController(config.name, config);
