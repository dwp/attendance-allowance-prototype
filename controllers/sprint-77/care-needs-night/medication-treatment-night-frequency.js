const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.medicationTreatmentNightFrequency,
  previous: urls.medicationTreatmentNightWhy,
  next: [
    {
      page: urls.checkAnswersNight,
    },
  ],
  validation: [
    {
      name: 'medication-typically-how-long',
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 200,
      },
      errors: {
        required: 'Enter how long it takes you to take medication or get treatment',
        maxLength: 'Enter how long it takes you to take medication or get treatment in 200 characters or less',
      },
      condition: {
        field: 'medication-treatment-night-frequency',
        value: 'once-a-night',
      },
    },
    {
      type: validation.radios,
      name: 'medication-treatment-night-frequency',
      errors: {
        required: 'You must select how many times',
      },
    },
  ],
};

module.exports = registerController(config.name, config);
