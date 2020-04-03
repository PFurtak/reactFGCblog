const express = require('express'),
  router = express.Router();

const StickModel = require('../models/stickModel');

// get all arcade sticks
router.get('/all', async (req, res) => {
  const allSticks = await StickModel.getAllSticks();
  res.json(allSticks).status(200);
});

// get review by stickid
router.get('/review/:stickid?', async (req, res) => {
  const stickId = req.params.stickid;
  const stickReview = await StickModel.reviewById(stickId);
  res.json(stickReview).status(200);
});

module.exports = router;
