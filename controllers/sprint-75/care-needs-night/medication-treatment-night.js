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
      page: urls.turningOverNightFrequency,
      condition: {
        field: urls.nightDifficulties,
        value: ['nighttime-turning-over'],
        match: match.anyOne,
      },
    },
    {
      page: urls.bedPositionNight,
      condition: {
        field: urls.nightDifficulties,
        value: ['nighttime-getting-settled'],
        match: match.anyOne,
      },
    },
    {
      page: urls.toiletNight,
      condition: {
        field: urls.nightDifficulties,
        value: ['nighttime-cleaning-yourself'],
        match: match.anyOne,
      },
    },
    {
      page: urls.nightDifficulties,
    },
  ],
  next: [
    {
      page: urls.medicationTreatmentNightWhy,
      condition: {
        field: urls.medicationTreatmentNight,
        value: [
          'having-oxygen-therapy',
          'cpap-mask',
          'applying-cream',
          'taking-medication',
          'something-else-medication',
        ],
        match: match.anyOne,
      },
    },
    {
      page: urls.checkAnswersNight,
    },
  ],
  validation: {
    name: 'medication-treatment-night',
    type: validation.checkboxes,
  },
};

module.exports = registerController(config.name, config);
