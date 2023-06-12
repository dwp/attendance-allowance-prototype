const {
  urls,
  match,
  validation,
  registerController,
} = require('../../../utils/controller');


const config = {
  name: urls.washDayWhy,
  previous: urls.washDay,
  next: [
    {
      page: urls.additinalWashDay,
      condition: {
        field: urls.washDayWhy,
        value: ['hold-on-to-things', 'wash-bathe-safely', 'wash-encouragement', 'wash-help', 'toilet-day-why-something-else'],
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
      name: 'something-else-wash-day-why-explain',
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 100,
      },
      errors: {
        required: 'You must tell us the reason you struggle.',
      },
      condition: {
        field: 'wash-day-why',
        value: 'wash-day-why-something-else', 
      },
    }, 
    {
      name: 'wash-day-why',
      type: validation.checkboxes,
    }
  ]
};

module.exports = registerController(config.name, config);
