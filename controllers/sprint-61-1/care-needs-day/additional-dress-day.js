const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.additionalDressDay,
  previous: urls.dressDayWhy,
  next: [
    {
      page: urls.movingIndoorsDay,
      condition: {
        field: urls.dayDifficulties,
        value: ['daytime-moving'],
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
      name: 'additional-dress-day',
      type: validation.radios,
    },
    {
      name: 'dress-frequency',
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 4,
      },
      errors: {
        required: 'Tell us approximately how many times you need to change your clothes during the day.',
      },
      condition: {
        field: 'additional-dress-day',
        value: 'yes',
      },
    },
  ],
};
module.exports = registerController(config.name, config);
