const {
  urls,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.start,
  next: urls.beforeYouStart,
};

module.exports = registerController(config.name, config);
