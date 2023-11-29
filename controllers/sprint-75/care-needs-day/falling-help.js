const {
  urls,
  match,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.fallingHelp,
  previous: urls.falling,
  next: [
    {
      page: urls.toiletDay,
      condition: {
        field: urls.dayDifficulties,
        value: ['daytime-toilet'],
        match: match.anyOne,
      },
    },
    {
      page: urls.eatDrinkDay,
      condition: {
        field: urls.dayDifficulties,
        value: ['daytime-eating'],
        match: match.anyOne,
      },
    },
    {
      page: urls.medicationTreatmentDay,
      condition: {
        field: urls.dayDifficulties,
        value: ['daytime-medication'],
        match: match.anyOne,
      },
    },
    {
      page: urls.socialActivitiesDay,
      condition: {
        field: urls.dayDifficulties,
        value: ['daytime-hobbies'],
        match: match.anyOne,
      },
    },
    {
      page: urls.communicationDay,
      condition: {
        field: urls.dayDifficulties,
        value: ['daytime-communication'],
        match: match.anyOne,
      },
    },
    {
      page: urls.checkAnswersDay,
    },
  ],
  validation: [
    {
      name: 'help-falling',
      type: validation.radios,
      errors: {
        required: 'You must select an option. We need to know whether you need help after you fall.',
      },
    },
    {
      name: 'falls-clinic',
      type: validation.radios,
      errors: {
        required: 'You must select an option. We need to know whether you have been referred to a Falls Clinic.',
      },
    },
  ],
};

module.exports = registerController(config.name, config);
