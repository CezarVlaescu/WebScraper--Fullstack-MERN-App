const express = require('express');
const scraperRoutes = require('./scraper');

const router = express.Router();

router.use('/', scraperRoutes);

module.exports = router;