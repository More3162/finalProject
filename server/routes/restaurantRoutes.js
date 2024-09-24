const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

// מסלולים למסעדות
router.post('/', restaurantController.createRestaurant);
router.get('/', restaurantController.getAllRestaurants);
router.get('/:id', restaurantController.getRestaurantById);
router.put('/:id', restaurantController.updateRestaurant);
router.delete('/:id', restaurantController.deleteRestaurant);

module.exports = router;










/* const express = require('express');
const router = express.Router();
const Restaurant = require('../restaurant/models/Restaurant');

// יצירת מסעדה חדשה
router.post('/', async (req, res) => {
    const restaurant = new Restaurant(req.body);
    try {
        await restaurant.save();
        res.status(201).send(restaurant);
    } catch (error) {
        res.status(400).send(error);
    }
});

// קבלת כל המסעדות
router.get('/', async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.send(restaurants);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router; */