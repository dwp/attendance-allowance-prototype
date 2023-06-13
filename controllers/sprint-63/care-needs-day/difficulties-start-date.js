const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.difficultiesStartDate,
  previous: urls.checkAnswersNight,
  next: urls.checkAnswersStartDate,
  validation: [
    {
      name: 'start-date',
      type: validation.radios,
    },
    {
      name: 'difficulties-start-date',
      type: validation.dateInput,
      condition: {
        field: 'start-date',
        value: 'less-than-six-months', 
      },
    }]
};

module.exports = registerController(config.name, config);
