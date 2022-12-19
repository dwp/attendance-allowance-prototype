const {
  urls,
  validation,
  registerController,
} = require('../../utils/controller');

const config = {
  name: urls.communicationNeeds,
  next: urls.illness,
  validation: {
    type: validation.checkboxes,
  },
};

module.exports = registerController(config.name, config);
