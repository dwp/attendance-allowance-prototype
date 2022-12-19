const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.bedPositionNightFrequency,
  previous: urls.bedPositionNight,
  next: [
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
    {
      page: urls.watchOverNight,
    },
  ],
  validation: [
    {
      type: validation.radios,
      name: 'night-frequency-1-bed',
      errors: {
        required: 'You must select how many times.',
      },
    },
    {
      type: validation.radios,
      name: 'night-length-1-bed',
      errors: {
        required: 'You must select how long.',
      },
    },
  ],
};

module.exports = registerController(config.name, config);
