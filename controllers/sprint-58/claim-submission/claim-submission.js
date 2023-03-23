const {
  urls,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.claimSubmission,
  next: urls.done,
};

module.exports = registerController(config.name, config);
