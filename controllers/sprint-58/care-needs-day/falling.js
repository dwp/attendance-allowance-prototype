const {
  urls,
  match,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.falling,
  previous: [
    {
      page: urls.stumbling,
      condition: {
        field: urls.fallingOrStumbling,
        value: ['risk-stumbling'],
        match: match.anyOne,
      },
    },
    {
      page: urls.fallingOrStumbling,
      condition: {
        field: urls.dayDifficulties,
        value: ['stumbling-falling'],
        match: match.anyOne,
      },
    },
  ],
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
