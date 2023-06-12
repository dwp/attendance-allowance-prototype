const {
  urls,
  registerController,
} = require('../../../utils/controller');
const beforeYouStart = require('./before-you-start');

const config = {
  name: urls.helpingSomeoneIntro,
  previous: urls.personClaiming, 
  next: urls.birthDate,
};

module.exports = registerController(config.name, config);
