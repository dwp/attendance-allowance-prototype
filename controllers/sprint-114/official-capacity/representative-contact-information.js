const {
  urls,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.representativeContactInformation,
  previous: urls.checkAnswersStartDate,
  next: urls.representativeName,
};

module.exports = registerController(config.name, config);
