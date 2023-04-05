const {
  urls,
  match,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.fallingOrStumblingWhy,
  previous: urls.fallingOrStumbling,
  next: [
    {
      page: urls.stumbling,
      condition: {
        field: urls.fallingOrStumbling,
        value: ['risk-stumbling'],
        match: match.anyOne,
      },
    },
    {
      page: urls.stumbling,
      condition: {
        field: urls.fallingOrStumbling,
        value: ['risk-stumbling'],
        match: match.anyOne,
      },
    },
    {
      page: urls.falling,
      condition: {
        field: urls.fallingOrStumbling,
        value: ['risk-falling'],
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
      name: 'something-else-falling-explain',
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 100,
      },
      errors: {
        required: 'Tell us what is causing you to stumble or fall',
      },
      condition: {
        field: 'falling-or-stumbling-why',
        value: 'something-else', 
      },
    }, 
    {
      name: 'falling-or-stumbling-why',
      type: validation.checkboxes,
    }]
};

module.exports = registerController(config.name, config);
