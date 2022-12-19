const {
  urls,
  validation,
  registerController,
} = require('../../utils/controller');

const config = {
  name: urls.activities,
  next: urls.activityWashing,
  validation: {
    type: validation.checkboxes,
  },
};

module.exports = registerController(config.name, config, () => {}, true);
