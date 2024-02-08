const {
  urls,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.ageRangeLimit,
  previous: urls.birthDate, 
};

module.exports = registerController(config.name, config);
