const mongoose = require('mongoose');
const generateRandomId = require('../../helpers/generateRandomId');
const Restaurant = require('../../restaurant/models/Restaurant');

const customerSchema = new mongoose.Schema({
    customer_id: {
        type: String,
        unique: true,
        default: () => generateRandomId(6), // מזהה רנדומלי באורך 6 תווים
        required: true
    },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone_number: { type: String, required: true },
    order_history: [{
        order_id: String,
        restaurant_id: {
            type: String,
            ref: 'Restaurant' // מפנה למסעדה
        },
        order_date: { type: Date, default: Date.now },
    }]
});

const Customer = mongoose.model('Customer', customerSchema);
