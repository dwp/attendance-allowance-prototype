const {
  urls,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.specialRulesFormUpload,
  previous: urls.specialRulesFormGuidance,
  previous: [
    {
      page: urls.specialRulesFormAdded,
      condition: {
        field: urls.specialRulesFormAdded,
        value: "yes",
        match: match.value,
      },
    },
    {
      page: urls.specialRulesFormGuidance,
    },
  ],
  next: urls.specialRulesFormAdded,
};


module.exports = registerController(config.name, config);
