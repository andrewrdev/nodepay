const express = require('express');
const router = express.Router();

// Controllers
const IndexController = require('../controllers/IndexController')

// Routes
router.get('/', IndexController.indexView);

module.exports = router;