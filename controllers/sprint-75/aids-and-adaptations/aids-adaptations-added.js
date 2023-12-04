const {
    urls,
    validation,
    match,
    registerController,
  } = require('../../../utils/controller');
  
  const config = {
    name: urls.aidsAdaptationsAdded,
    next: [
      {
        page: urls.aidsAdaptations,
        condition: {
          field: urls.aidsAdaptationsAdded,
          value: 'yes',
          match: match.value,
        },
      },
      {
        page: urls.difficultiesStartDate,
      },
    ],
    previous: urls.aidsAdaptationsDifficulty,
    validation: {
      type: validation.radios,
      errors: {
        required: 'You must select an option.',
      },
    },
  };
  
  module.exports = registerController(config.name, config);
  