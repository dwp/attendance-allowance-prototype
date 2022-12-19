const express = require('express');

const router = express.Router();
const { urls } = require('../../../utils/constants');
const activityRouter = require('./activity-router');

const config = {
  tag: 'dressing-yourself',
  name: urls.activityDressing,
  next: urls.activityBed,
};

router.post('/', (req, res) => {
  activityRouter.routeToNext(req, res, config.tag, config.name, config.next);
});

module.exports = router;
