const {
  urls,
  match,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.falling,
  previous: [
    {
      page: urls.stumbling,
      condition: {
        field: urls.fallingOrStumbling,
        value: ['risk-stumbling'],
        match: match.anyOne,
      },
    },
    {
      page: urls.fallingOrStumbling,
      condition: {
        field: urls.dayDifficulties,
        value: ['stumbling-falling'],
        match: match.anyOne,
      },
    },
  ],
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
      page: urls.keepEyeIntroduction,
    },
  ],
  validation: [
    {
      name: 'frequency-falling',
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 4,
      },
      errors: {
        required: 'Enter the number of times you fall in a year.',
      },
    },
    {
      name: 'help-falling',
      type: validation.radios,
    },
    {
      name: 'falls-clinic',
      type: validation.radios,
    },
  ],
};

module.exports = registerController(config.name, config);
