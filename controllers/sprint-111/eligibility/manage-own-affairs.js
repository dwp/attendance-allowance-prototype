const {
    urls,
    validation,
    match,
    registerController,
  } = require('../../../utils/controller');
  
  const config = {
    name: urls.manageOwnAffairs,
    previous: urls.fullName,
    next: [
      {
        page: urls.helperName,
        condition: {
          field: urls.manageOwnAffairs,
          value: 'yes',
          match: match.value,
        },
      },
      {
        page: urls.manageOwnAffairsIneligible,
      },
    ],
    validation: {
      type: validation.radios,
      errors: {
        required: 'Select yes if [name] has the mental capacity to manage their own affairs',
      },
    },
  };
  
  module.exports = registerController(config.name, config);
  