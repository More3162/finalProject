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
        if (!restaurant) return res.status(400).json({ message: 'Invalid Email' });
        const isMatch = await bcrypt.compare(password, restaurant.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid Password' });
        const token = jwt.sign({ id: restaurant._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return token;
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = { resRegister, resLogin };
