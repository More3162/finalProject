const Restaurant = require('../models/Restaurant');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { resRegister, resLogin } = require('./restaurantAccessDataService');
const _ = require('lodash');


const resRegister = async (newRestaurant) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const restaurant = new Restaurant({ ...req.body, password: hashedPassword });
        let newRestaurant = new Restaurant(newRestaurant);
        await newRestaurant.save();
        return _.pick(newRestaurant, ['_id', 'name', 'email']);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


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


/* exports.createRestaurant = async (req, res) => {
    try {
        const restaurant = new Restaurant(req.body);
        await restaurant.save();
        res.status(201).json(restaurant);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}; */

/* exports.resRegister = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const restaurant = new Restaurant({ ...req.body, password: hashedPassword });
        await restaurant.save();
        res.status(201).json({ message: 'Restaurant created' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}



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
}; */