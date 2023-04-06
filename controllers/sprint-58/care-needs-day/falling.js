const {
  urls,
  match,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.falling,
  previous: urls.fallingWhen,  
  next: urls.fallingHelp,
  validation: [
  {
    name: 'frequency-falling',
    type: validation.textInput,
    options: {
      minLength: 1,
      maxLength: 4,
    },
    errors: {
      required: 'Enter the number of times you fell in the last 12 months.',
    }
  }], 
};

module.exports = registerController(config.name, config);
