const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.communicationDayDifficulties,
  previous: urls.communicationDay,
  next: urls.keepEyeIntroduction,
  validation: [
    {
      name: 'something-else-explain-communication-difficulties',
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 100,
      },
      errors: {
        required: 'Tell us the other way you manage.',
      },
      condition: {
        field: 'communication-day-difficulties',
        value: 'something-else-communication-difficulties', 
      },
    }, 
    {
      name: 'communication-day-difficulties',
      type: validation.checkboxes,
    }]
};

module.exports = registerController(config.name, config);
