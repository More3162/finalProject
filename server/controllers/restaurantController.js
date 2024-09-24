const Restaurant = require('../restaurant/models/Restaurant');

exports.createRestaurant = async (req, res) => {
    try {
        const restaurant = new Restaurant(req.body);
        await restaurant.save();
        res.status(201).json(restaurant);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// פונקציות נוספות כמו getAllRestaurants, getRestaurantById, updateRestaurant, deleteRestaurant

