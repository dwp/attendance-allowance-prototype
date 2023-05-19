const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.medicationTreatmentDayWhy,
  previous: [
    {
      page: urls.medicationTreatmentDay,
    },
  ],
  next: [
    {
      page: urls.medicationTreatmentDayFrequency,
    },
  ],
  validation: [
    {
      name: 'something-else-medication-treatment-day-why-explain',
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 100,
      },
      errors: {
        required: 'You must tell us in what other way you struggle.',
      },
      condition: {
        field: 'medication-treatment-day-why',
        value: 'medication-treatment-day-why-something-else', 
      },
    }, 
    {
      name: 'medication-treatment-day-why',
      type: validation.checkboxes,
    }]
};

module.exports = registerController(config.name, config);
