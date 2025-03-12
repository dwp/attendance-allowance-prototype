const {
  urls,
  options,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.oops,
  previous: urls.whoIsApplying,
  next: urls.bestDescribe,
};

module.exports = registerController(config.name, config);
