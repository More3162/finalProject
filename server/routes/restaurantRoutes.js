const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

// מסלולים למסעדות

router.post('/', restaurantController.createRestaurant);

module.exports = router;


