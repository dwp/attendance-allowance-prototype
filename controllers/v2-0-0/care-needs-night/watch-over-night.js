const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.watchOverNight,
  previous: [
    {
      page: urls.medicationTreatmentNight,
      condition: {
        field: urls.nightDifficulties,
        value: ['nighttime-medication'],
        match: match.anyOne,
      },
    },
    {
      page: urls.movingIndoorsNight,
      condition: {
        field: urls.nightDifficulties,
        value: ['nighttime-moving'],
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
      page: urls.toiletNight,
      condition: {
        field: urls.nightDifficulties,
        value: ['nighttime-toilet'],
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
      page: urls.difficultiesStartDateNight,
    },
  ],
  next: [
    {
      page: urls.watchOverNightWhy,
      condition: {
        field: urls.watchOverNight,
        value: 'yes',
        match: match.value,
      },
    },
    {
      page: urls.checkAnswersNight,
    },
  ],
  validation: {
    type: validation.radios,
  },
};

module.exports = registerController(config.name, config);
