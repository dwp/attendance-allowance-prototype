const {
    urls,
    validation,
    match,
    registerController,
  } = require('../../../utils/controller');
  
  const config = {
    name: urls.aidsAdaptations,
    previous: [
      {
        page: urls.aidsAdaptationsQuestion,
      },
    ],
    next: [
      {
        page: urls.aidsAdaptationsDifficulty,
      },
    ],
    validation: {
      type: validation.textInput,
      errors: {
        required: 'Enter the name of your adapation, equipment or aid',
      },
    },
  };
  
  module.exports = registerController(config.name, config);
  