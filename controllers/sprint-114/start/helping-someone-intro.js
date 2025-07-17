const {
  urls,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.helpingSomeoneIntro,
  previous: urls.helperName,
  next: urls.birthDate,
};

module.exports = registerController(config.name, config);
