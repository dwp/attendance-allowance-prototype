const {
  urls,
  match,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.socialActivitiesDay,
  previous: [
    {
      page: urls.medicationTreatmentDay,
      condition: {
        field: urls.dayDifficulties,
        value: ['daytime-medication'],
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
      page: urls.movingIndoorsDay,
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
      page: urls.socialActivitiesDayFrequency,
      condition: {
        field: urls.socialActivitiesDay,
        value: ['social-physical', 'social-motivation'],
        match: match.all, 
      },
    },
    {
      page: urls.socialActivitiesDayFrequency,
      condition: {
        field: urls.socialActivitiesDay,
        value: ['social-physical'],
        match: match.all,
      },
    },
    {
      page: urls.socialActivitiesDayFrequency,
      condition: {
        field: urls.socialActivitiesDay,
        value: ['social-motivation'],
        match: match.all,
      },
    },
    {
      page: urls.communicationDay,
      condition: {
        field: urls.dayDifficulties,
        value: 'daytime-communication',
        match: match.value,
      },
    },
    {
      page: urls.keepEyeIntroduction,
    },
  ],
  validation: {
    type: validation.checkboxes,
  },
};

module.exports = registerController(config.name, config);
