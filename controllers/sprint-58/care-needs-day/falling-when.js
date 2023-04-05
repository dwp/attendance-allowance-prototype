const {
  urls,
  match,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.fallingWhen,
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
      field: urls.fallingOrStumblingWhy,
      value: ['risk-falling'],
      match: match.anyOne,
    },
  }],
  next: [
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
      name: 'frequency-stumbling',
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 4,
      },
      errors: {
        required: 'Enter how many times you stumble a week.',
      },
    },
  ],
};

module.exports = registerController(config.name, config);
