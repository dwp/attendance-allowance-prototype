const {
  urls,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.checkAnswersDetails,
  previous: [
    {
      page: urls.surgeryMedicalCentre,
      condition: {
        field: urls.consent,
        value: 'yes',
        match: match.value,
      },
    },
    {
      page: urls.evidence,
    },
  ],
  next: [
    {
      page: urls.telephoneNumber,
      condition: {
        field: urls.specialRulesDeclaration,
        value: 'yes',
        match: match.value,
      },
    },
    {
      page: urls.dayDifficulties,
    },
  ],
};

const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
  req.session.data['cya-destination'] = req.session.data.destination;
  req.session.data['cya-origin'] = urls.checkAnswersDetails;
  res.redirect(`${req.version}${req.session.data.destination}`);
});

module.exports = router;
module.exports = registerController(config.name, config);
