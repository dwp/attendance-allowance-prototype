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
      page: urls.safeDayNight,
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
      type: validation.textInput,
      name: 'night-length-5-meds',
      errors: {
        required: 'You must tell us how long these occasions take.',
      },
    },
  ],
};

module.exports = registerController(config.name, config);
