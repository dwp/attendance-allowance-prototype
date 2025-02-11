const {
  urls,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.claimSubmission,
  previous: urls.checkAnswersDetails,
  next: urls.done,
};

module.exports = registerController(config.name, config);
