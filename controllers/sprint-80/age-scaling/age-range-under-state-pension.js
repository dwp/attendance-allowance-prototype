const {
    urls,
    match,
    registerController,
  } = require('../../../utils/controller');
  
  const config = {
    name: urls.ageRangeUnderStatePension,
    previous: [
     {
        page: urls.ageRangeCheck,
     },
    ],
  };
  
  module.exports = registerController(config.name, config);
