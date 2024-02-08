const {
    urls,
    registerController,
  } = require('../../../utils/controller');
  
  const config = {
    name: urls.done,
  };
  
  module.exports = registerController(config.name, config);
  