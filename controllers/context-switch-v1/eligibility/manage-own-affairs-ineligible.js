const {
    urls,
    registerController,
  } = require('../../../utils/controller');
  
  const config = {
    name: urls.manageOwnAffairsIneligible,
    previous: urls.manageOwnAffairs,
    
  };
  
  module.exports = registerController(config.name, config);
  