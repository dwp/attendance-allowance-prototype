const {
  urls,
  match,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.washDay,
  previous: [
    {
      page: urls.returnBedDay,
      condition: {
        field: urls.bedDay,
        value: ['physical', 'motivation'],
        match: match.anyOne,
      },
    },
    {
      page: urls.bedDay,
      condition: {
        field: urls.dayDifficulties,
        value: ['daytime-bed'],
        match: match.anyOne,
      },
    },
    {
      page: urls.dayDifficulties,
    },
  ],
  next: [
    {
      page: urls.washDayWhy,
      condition: {
        field: urls.washDay,
        value: ['get-in-out-bath', 'wash-drying-myself','taking-shower', 'forgetting-lacking-motivation-wash', 'something-else-washing'],
        match: match.anyOne,
      },
    },
    {
      page: urls.dressDay,
      condition: {
        field: urls.dayDifficulties,
        value: ['daytime-dressing'],
        match: match.anyOne,
      },
    },
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
      name: 'something-else-explain-washing',
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 100,
      },
      errors: {
        required: 'You must tell us what you struggle with.',
      },
      condition: {
        field: 'wash-day',
        value: 'something-else-washing', 
      },
    }, 
    {
      name: 'wash-day',
      type: validation.checkboxes,
    }
  ]
};

module.exports = registerController(config.name, config);
