const {
  urls,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.representativeIntro,
  previous: urls.bestDescribe, 
  next: urls.birthDate,
};

module.exports = registerController(config.name, config);
