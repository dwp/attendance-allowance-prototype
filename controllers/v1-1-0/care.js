const {
  urls,
  validation,
  registerController,
} = require('../../utils/controller');

const config = {
  name: urls.care,
  next: urls.supervision,
  validation: {
    type: validation.radios,
  },
};

module.exports = registerController(config.name, config);
