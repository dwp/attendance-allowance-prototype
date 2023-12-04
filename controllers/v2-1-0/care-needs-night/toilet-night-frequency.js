const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.toiletNightFrequency,
  previous: urls.toiletNight,
  next: [
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
      page: urls.watchOverYouIntro,
    },
  ],
  validation: [
    {
      type: validation.radios,
      name: 'night-frequency-2-loo',
      errors: {
        required: 'You must select how many times.',
      },
    },
  ],
};

module.exports = registerController(config.name, config);
