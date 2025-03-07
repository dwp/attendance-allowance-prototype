const {
  urls,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.claimSubmission,
  previous: urls.checkAnswersStartDate,
  next: urls.done,
};

module.exports = registerController(config.name, config);
