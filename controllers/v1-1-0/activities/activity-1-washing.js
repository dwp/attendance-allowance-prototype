const express = require('express');

const router = express.Router();
const { urls } = require('../../../utils/constants');
const activityRouter = require('./activity-router');

const config = {
  tag: 'washing-yourself',
  name: urls.activityWashing,
  next: urls.activityDressing,
};

router.post('/', (req, res) => {
  activityRouter.routeToNext(req, res, config.tag, config.name, config.next);
});

module.exports = router;
