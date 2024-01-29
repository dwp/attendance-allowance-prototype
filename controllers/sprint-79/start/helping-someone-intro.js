const {
  urls,
  registerController,
} = require('../../../utils/controller');
const beforeYouStart = require('./before-you-start');

const config = {
  name: urls.helpingSomeoneIntro,
  previous: urls.bestDescribe, 
  next: urls.specialRulesDeclaration,
};

module.exports = registerController(config.name, config);
