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
      page: urls.watchOverNight,
    },
  ],
  validation: [
    {
      type: validation.radios,
      name: 'night-frequency-5-meds',
      errors: {
        required: 'You must select how many times.',
      },
    },
    {
      type: validation.radios,
      name: 'night-length-5-meds',
      errors: {
        required: 'You must select how long.',
      },
    },
  ],
};

module.exports = registerController(config.name, config);
