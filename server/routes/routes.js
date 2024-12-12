const express = require('express');
const router = express.Router();

const restaurantController = require('./Controllers/restaurantController');
const menuController = require('./Controllers/menuController');
const orderController = require('./Controllers/orderController');
const customerController = require('./Controllers/customerController');


router.use('/restaurant', restaurantController);
router.use('/menu', menuController);
router.use('/order', orderController);
router.use('/customer', customerController);

module.exports = router;