const {
  urls,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.start,
  next: urls.personClaiming,
};

module.exports = registerController(config.name, config);
