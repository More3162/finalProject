const Restaurant = require('../models/Restaurant');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


exports.resRegister = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const restaurant = new Restaurant({ ...req.body, password: hashedPassword });
        await restaurant.save();
        res.status(201).json({ message: 'Restaurant created' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

exports.resLogin = async (req, res) => {
    try {
        const restaurant = await Restaurant.findOne({ email: req.body.email });
        if (!restaurant) return res.status(400).json({ message: 'Invalid credentials' });
        const isMatch = await bcrypt.compare(req.body.password, restaurant.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
        const token = jwt.sign({ id: restaurant._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};





/* exports.createRestaurant = async (req, res) => {
    try {
        const restaurant = new Restaurant(req.body);
        await restaurant.save();
        res.status(201).json(restaurant);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}; */

