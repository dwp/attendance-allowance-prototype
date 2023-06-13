const {
  urls,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.illnessDisabilityManual,
  next: urls.illnessDisability,
  previous: urls.illnessDisability,
};

module.exports = registerController(config.name, config);
