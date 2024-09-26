const Restaurant = require('../models/restaurantModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const resRegister = async (newRestaurant) => {
    try {
        const hashedPassword = await bcrypt.hash(newRestaurant.password, 10);
        const restaurant = new Restaurant({ ...newRestaurant, password: hashedPassword });
        let newRestaurant = new Restaurant(restaurant);
        await newRestaurant.save();
        return _.pick(newRestaurant, ['_id', 'name', 'email']);
    } catch (error) {
        throw new Error(error.message);
    }
}
const resLogin = async (email, password) => {
    try {
        const restaurant = await Restaurant.findOne({ email: email });
        if (!restaurant) throw new Error('Invalid Email');
        const isMatch = await bcrypt.compare(password, restaurant.password);
        if (!isMatch) throw new Error('Invalid Password');
        const token = jwt.sign({ id: restaurant._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return token;
    }
    catch (error) {
        throw new Error(error.message);
    }
}

module.exports = { resRegister, resLogin };