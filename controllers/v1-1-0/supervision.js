const {
  urls,
  validation,
  registerController,
} = require('../../utils/controller');

const config = {
  name: urls.supervision,
  next: urls.activities,
  validation: [
    {
      name: 'supervision-phase',
      type: validation.checkboxes,
    },
    {
      name: 'supervision-day-frequency',
      type: validation.radios,
      condition: {
        field: 'supervision-phase',
        value: 'day',
      },
      errors: {
        required: 'Day: Select frequency',
      },
    },
    {
      name: 'supervision-day-history',
      type: validation.radios,
      condition: {
        field: 'supervision-phase',
        value: 'day',
      },
      errors: {
        required: 'Day: Select when it started',
      },
    },
    {
      name: 'supervision-night-frequency',
      type: validation.radios,
      condition: {
        field: 'supervision-phase',
        value: 'night',
      },
      errors: {
        required: 'Night: Select frequency',
      },
    },
    {
      name: 'supervision-night-minutes',
      type: validation.radios,
      condition: {
        field: 'supervision-phase',
        value: 'night',
      },
      errors: {
        required: 'Night: Select duration',
      },
    },
    {
      name: 'supervision-night-history',
      type: validation.radios,
      condition: {
        field: 'supervision-phase',
        value: 'night',
      },
      errors: {
        required: 'Night: Select when it started',
      },
    },
  ],
};

module.exports = registerController(config.name, config);
