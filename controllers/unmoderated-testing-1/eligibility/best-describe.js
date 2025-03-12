const {
    urls,
    validation,
    match,
    registerController,
  } = require('../../../utils/controller');
  
  const config = {
    name: urls.bestDescribe,
    previous: urls.whoIsApplying,
    next: urls.thanks,
    validation: {
      type: validation.radios,
      errors: {
        required: 'Select the option that best describes you',
      },
    },
  };
  
  module.exports = registerController(config.name, config);
  