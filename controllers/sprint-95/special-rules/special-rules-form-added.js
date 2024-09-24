const {
  urls,
  match,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.specialRulesFormAdded,
  previous: urls.specialRulesFormUpload,
  next: [
    {
      page: urls.specialRulesFormUpload,
      condition: {
        field: urls.specialRulesFormAdded,
        value: "yes",
        match: match.value,
      },
    },
    {
      page: urls.illnessDisability,
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required: "Select yes if you want to upload another file",
      amount: "Upload no more than 2 files",
    },
  },
};

module.exports = registerController(config.name, config);
