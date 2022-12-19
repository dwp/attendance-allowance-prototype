const {
  urls,
  match,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.dayDifficulties,
  previous: urls.checkAnswersDetails,
  next: [
    {
      page: urls.keepEyeIntroduction,
      condition: {
        field: urls.dayDifficulties,
        value: ['daytime-none'],
        match: match.anyOne,
      },
    },
    {
      page: urls.difficultiesStartDateDay,
    },
  ],
  validation: {
    type: validation.checkboxes,
  },
};

module.exports = registerController(config.name, config);
