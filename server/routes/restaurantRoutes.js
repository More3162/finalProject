const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

// מסלולים למסעדות

router.post('/restaurant', restaurantController.resRegister);
router.post('/restaurant/login', restaurantController.resLogin);

module.exports = router;


