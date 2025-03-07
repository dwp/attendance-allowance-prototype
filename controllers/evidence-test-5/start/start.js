const {
  urls,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.start,
  next: urls.healthConditions,
};

module.exports = registerController(config.name, config);
