const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

// מסלולים למסעדות
router.post('/', restaurantController.createRestaurant);
router.post('/register', customerController.register);
router.post('/login', customerController.login);

module.exports = router;


