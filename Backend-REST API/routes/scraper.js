// Define scraping routes

const express = require('express');
const router = express.Router();
const scraperController = require('../controllers/scraperController');

router.get('/scrape', scraperController.scrapeWebsite);

module.exports = router;
