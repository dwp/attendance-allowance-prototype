const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.ageRangeCheck,
  previous: urls.howToClaim,
  next: [
    {
      page: urls.ageRangeUnderStatePension,
      condition: {
        field: urls.ageRangeCheck,
        value: '65-under',
        match: match.value,
      },
    },
    {
      page: urls.whoIsApplying,
      condition: {
        field: urls.ageRangeCheck,
        value: '66-69',
        match: match.value,
      },
    },
    {
      page: urls.whoIsApplying,
      condition: {
        field: urls.ageRangeCheck,
        value: '70-74',
        match: match.value,
      },
    },
    {
      page: urls.ageRangeIneligible
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required: 'Select how old the person who wants to claim is',
    },
  },
};

module.exports = registerController(config.name, config);
