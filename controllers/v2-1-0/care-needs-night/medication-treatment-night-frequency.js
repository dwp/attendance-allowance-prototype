const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.medicationTreatmentNightFrequency,
  previous: urls.medicationTreatmentNight,
  next: [
    {
      page: urls.watchOverYouIntro,
    },
  ],
  validation: [
    {
      type: validation.radios,
      name: 'medication-night-frequency',
      errors: {
        required: 'You must select how many times.',
      },
    },
  ],
};

module.exports = registerController(config.name, config);
