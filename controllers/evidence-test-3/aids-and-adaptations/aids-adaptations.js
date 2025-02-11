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
      options: {
        minLength: 1,
        maxLength: 200,
      },
      errors: {
        required: 'Enter the name of your adapation, equipment or aid',
        maxLength: "Enter the name of your adapation, equipment or aid in 200 characters or less",
      },
    },
  };
  
  module.exports = registerController(config.name, config);
  