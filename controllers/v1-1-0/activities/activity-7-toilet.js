const express = require('express');

const router = express.Router();
const { urls } = require('../../../utils/constants');
const activityRouter = require('./activity-router');

const config = {
  tag: 'using-or-getting-to-the-toilet',
  name: urls.activityToilet,
  next: urls.communicationNeeds,
};

router.post('/', (req, res) => {
  activityRouter.routeToNext(req, res, config.tag, config.name, config.next, true);
});

module.exports = router;
