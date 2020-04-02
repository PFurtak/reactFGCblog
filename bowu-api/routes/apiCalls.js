const express = require('express'),
  router = express.Router();

const StickModel = require('../models/stickModel');

// Read All
router.get('/all', async (req, res) => {
  const allSticks = await StickModel.getAllSticks();
  res.json(allSticks).status(200);
});
