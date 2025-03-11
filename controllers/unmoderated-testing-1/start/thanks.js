const {
  urls,
  options,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.thanks,
  previous: urls.bestDescribe,
};

module.exports = registerController(config.name, config);
