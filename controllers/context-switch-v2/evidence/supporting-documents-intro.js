const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.supportingDocumentsIntro,
  previous: [
    {
      page: urls.noDifficultiesIneligible,
      condition: {
        page: urls.noDifficultiesIneligible,
        match: match.custom,
        customValidation: (data) => {
          return data[urls.safeDayNight]?.includes('no') &&
            data[urls.dayDifficulties]?.includes('daytime-none') &&
            data[urls.nightDifficulties]?.includes('nighttime-none')
        }
      },
    },
    {
      page: urls.careNeedsCause,
    },
  ],
  next: urls.checkAnswersStartDate,
  validation: {
    type: validation.radios,
    errors: {
      required: 'Select yes if they have any supporting documents to confirm what you have told us',
    },
  },
};

module.exports = registerController(config.name, config);
