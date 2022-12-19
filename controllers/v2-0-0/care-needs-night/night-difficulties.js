const {
  urls,
  match,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.nightDifficulties,
  previous: urls.checkAnswersDay,
  next: [
    {
      page: urls.watchOverNight,
      condition: {
        field: urls.nightDifficulties,
        value: ['nighttime-none'],
        match: match.anyOne,
      },
    },
    {
      page: urls.difficultiesStartDateNight,
    },
  ],
  validation: {
    type: validation.checkboxes,
  },
};

module.exports = registerController(config.name, config);
