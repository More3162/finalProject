const Restaurant = require('../models/Restaurant');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

// יצירת מסעדה חדשה
const resRegister = async (newRestaurant, req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newRestaurant = new Restaurant({ ...req.body, password: hashedPassword });
        await newRestaurant.save();
        return _.pick(newRestaurant, ['_id', 'name', 'email']);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// כניסת מסעדה קיימת
const resLogin = async (email, password) => {
    try {
        const restaurant = await Restaurant.findOne({ email: email });
        if (!restaurant) {
            throw new Error('Invalid Email'); // Throw error instead of using res
        }
        const isMatch = await bcrypt.compare(password, restaurant.password);
        if (!isMatch) {
            throw new Error('Invalid Password'); // Throw error instead of using res
        }
        const token = jwt.sign({ id: restaurant._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return token; // Return the generated token
    } catch (error) {
        throw new Error(error.message); // Throw error for route handler to catch
    }
};

module.exports = { resRegister, resLogin };
