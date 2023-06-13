const {
  urls,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.illnessDisabilityDate,
  next: urls.illnessDisabilityAdded,
  previous: urls.illnessDisability,
};

module.exports = registerController(config.name, config);
