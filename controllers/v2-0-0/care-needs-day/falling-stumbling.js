const {
  urls,
  match,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.fallingStumbling,
  previous: urls.movingIndoorsDay,
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
      name: 'falling-stumbling',
      type: validation.radios,
    },
    {
      name: 'frequency-falls',
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 4,
      },
      errors: {
        required: 'Enter how many times do you fall or stumble again during the day.',
      },
      condition: {
        field: 'falling-stumbling',
        value: 'yes',
      },
    },
  ],
};

module.exports = registerController(config.name, config);
