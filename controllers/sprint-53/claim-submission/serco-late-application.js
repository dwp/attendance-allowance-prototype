const {
  urls,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.sercoLateApplication,
  next: urls.claimSubmission,
  previous: urls.checkAnswersContactDetails,
};

module.exports = registerController(config.name, config);
