const express = require('express');
const router = express.Router();

const restaurantController = require('./controllers/restaurantController');
const menuController = require('./controllers/menuController');
const orderController = require('./controllers/orderController');
const customerController = require('./controllers/customerController');


router.use('/restaurant', restaurantController);
router.use('/menu', menuController);
router.use('/order', orderController);
router.use('/customer', customerController);

module.exports = router;