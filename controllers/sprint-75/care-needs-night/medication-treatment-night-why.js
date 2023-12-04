const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.medicationTreatmentNightWhy,
  previous: [
    {
      page: urls.medicationTreatmentNight,
    },
  ],
  next: [
    {
      page: urls.medicationTreatmentNightFrequency,
    },
  ],
  validation: [
    {
      name: 'something-else-medication-treatment-night-why-explain',
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 200,
      },
      errors: {
        required: 'Enter how you manage taking your medication or treatment during the night',
        maxLength: 'Managing your medication  or treatment must be 200 characters or less',
      },
      condition: {
        field: 'medication-treatment-night-why',
        value: 'medication-treatment-night-why-something-else',
      },
    },
    {
      name: 'medication-treatment-night-why',
      type: validation.checkboxes,
    }],
};

module.exports = registerController(config.name, config);
