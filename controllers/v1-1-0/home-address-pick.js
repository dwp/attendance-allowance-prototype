const {
  urls,
  validation,
  registerController,
} = require('../../utils/controller');

const config = {
  name: urls.homeAddressPick,
  next: urls.care,
  validation: {
    type: validation.select,
  },
};

module.exports = registerController(config.name, config);
