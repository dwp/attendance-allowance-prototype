const {
    urls,
    match,
    registerController,
  } = require('../../../utils/controller');
  
  const config = {
    name: urls.whoIsApplyingIneligible,
    previous: [
      {
        page: urls.bestDescribe,
        condition: {
          field: urls.whoIsApplying,
          value: 'someone-else',
          match: match.value,
        },
      },
      {
        page: urls.whoIsApplying,
      },
    ],
  };
  
  module.exports = registerController(config.name, config);
