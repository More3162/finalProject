const Restaurant = require('../models/Restaurant');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

// יצירת מסעדה חדשה
const resRegister = async (newRestaurantData) => {
    try {
        // הצפנת הסיסמה
        const hashedPassword = await bcrypt.hash(newRestaurantData.password, 10);

        // יצירת אובייקט מסעדה עם הסיסמה המוצפנת
        const newRestaurant = new Restaurant({
            ...newRestaurantData,
            password: hashedPassword
        });

        // שמירת המסעדה למסד נתונים
        await newRestaurant.save();

        // החזרת הנתונים שהמשתמש יכול לקבל, ללא הסיסמה
        return _.pick(newRestaurant, ['_id', 'name', 'email']);
    } catch (error) {
        throw new Error("Error while registering restaurant: " + error.message);
    }
}

// כניסת מסעדה קיימת
const resLogin = async (email, password) => {
    const restaurant = await Restaurant.findOne({ email: email });
    if (!restaurant) {
        throw new Error('Invalid Email'); // Throw error instead of using res
    }
    const isMatch = await bcrypt.compare(password, restaurant.password);
    if (!isMatch) {
        throw new Error('Invalid Password'); // Throw error instead of using res
    }
    const token = jwt.sign({ id: restaurant._id }, process.env.JWT_SECRET);
    return token; // Return the generated token
};

const getRes = async (id) => {
    console.log("Getting restaurant with id:", id);
    const restaurant = await Restaurant.findById(id).populate("orders");
    console.log(restaurant)
    if (!restaurant) {
        throw new Error("Restaurant not found");
    }
    return restaurant;
};

// פונקציה להבאת כל המסעדות
const getAllRes = async () => {
    console.log("Getting all restaurants");
    const restaurants = await Restaurant.find();
    if (!restaurants || restaurants.length === 0) {
        throw new Error("No restaurants found");
    }
    return restaurants;
};



module.exports = { getRes, resRegister, resLogin, getAllRes };
