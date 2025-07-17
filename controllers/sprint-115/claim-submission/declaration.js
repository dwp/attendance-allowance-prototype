const {
  urls,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.declaration,
  next: urls.applicationComplete,
};

module.exports = registerController(config.name, config);
