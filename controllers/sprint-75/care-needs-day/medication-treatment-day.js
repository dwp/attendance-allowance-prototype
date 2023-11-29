const {
  urls,
  match,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.medicationTreatmentDay,
  previous: [
    {
      page: urls.eatDrinkDay,
      condition: {
        field: urls.dayDifficulties,
        value: ['daytime-eating'],
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
      page: urls.fallingOrStumbling,
      condition: {
        field: urls.dayDifficulties,
        value: ['stumbling-falling'],
        match: match.anyOne,
      },
    },
    {
      page: urls.movingIndoorsStairs,
      condition: {
        field: urls.movingIndoorsDay,
        value: ['stairs'],
        match: match.anyOne,
      },
    },
    {
      page: urls.movingIndoorsWhy,
      condition: {
        field: urls.dayDifficulties,
        value: ['daytime-moving'],
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
      page: urls.washDay,
      condition: {
        field: urls.dayDifficulties,
        value: ['daytime-washing'],
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
      page: urls.medicationTreatmentDayWhy,
      condition: {
        field: urls.medicationTreatmentDay,
        value: ['dressings-bandages', 'applying-cream', 'administering-medication', 'administering-treatment', 'right-medication-dosage', 'coping-side-effects', 'motivation-medication', 'something-else-medication'],
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
      name: 'something-else-explain-medication',
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 200,
      },
      errors: {
        required: 'You must tell us what you struggle with.',
        maxLength: 'Tell us what you struggle with must be 200 characters or less.',
      },
      condition: {
        field: 'medication-treatment-day',
        value: 'something-else-medication',
      },
    },
    {
      name: 'medication-treatment-day',
      type: validation.checkboxes,
    },
  ],
};

module.exports = registerController(config.name, config);
