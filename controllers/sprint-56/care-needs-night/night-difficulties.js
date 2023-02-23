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
      page: urls.watchOverYouIntro,
      condition: {
        field: urls.nightDifficulties,
        value: ['nighttime-none'],
        match: match.anyOne,
      },
    },
    {
      page: urls.bedPositionNight,
      condition: {
        field: urls.nightDifficulties,
        value: ['nighttime-position-bed'],
        match: match.anyOne,
      },
    },
    {
      page: urls.toiletNight,
      condition: {
        field: urls.nightDifficulties,
        value: ['nighttime-toilet'],
        match: match.anyOne,
      },
    },
    {
      page: urls.cleaningSoiledNight,
      condition: {
        field: urls.nightDifficulties,
        value: ['nighttime-cleaning-yourself'],
        match: match.anyOne,
      },
    },
    {
      page: urls.medicationTreatmentNight,
      condition: {
        field: urls.nightDifficulties,
        value: ['nighttime-medication'],
        match: match.anyOne,
      },
    },
  ],
  validation: {
    type: validation.checkboxes,
  },
};

module.exports = registerController(config.name, config);
