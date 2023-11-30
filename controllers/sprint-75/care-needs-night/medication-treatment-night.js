const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.medicationTreatmentNight,
  previous: [
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
      page: urls.medicationTreatmentNightFrequency,
      condition: {
        field: urls.medicationTreatmentNight,
        value: [
          'physical',
          'prompt',
        ],
        match: match.anyOne,
      },
    },
    {
      page: urls.safeDayNight,
    },
  ],
  validation: {
    name: 'medication-treatment-night',
    type: validation.checkboxes,
  },
};

module.exports = registerController(config.name, config);
