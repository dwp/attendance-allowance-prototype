const {
  urls,
  validation,
  registerController,
} = require('../../utils/controller');

const config = {
  name: urls.treatment,
  next: urls.telephoneNumber,
  validation: {
    type: validation.radios,
  },
};

module.exports = registerController(config.name, config);
