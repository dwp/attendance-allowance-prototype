const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.careNeedsCause,
  previous: urls.difficultiesStartDate,
  next: urls.supportingDocumentsIntro,
  
};

module.exports = registerController(config.name, config);
