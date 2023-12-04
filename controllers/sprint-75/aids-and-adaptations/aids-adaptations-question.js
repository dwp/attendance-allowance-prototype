const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.aidsAdaptationsQuestion,
  next: [
    {
      page: urls.aidsAdaptationsReason,
      condition: {
        field: urls.aidsAdaptationsQuestion,
        value: 'no',
        match: match.value,
      },
    },
    {
      page: urls.aidsAdaptations,
    },
  ],
  validation: [
    {
      name: 'aids-adaptations-question',
      type: validation.radios,
    }
  ]
};

module.exports = registerController(config.name, config);
