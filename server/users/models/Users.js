const mongoose = require('mongoose');
const generateRandomId = require('../../helpers/generateRandomId');
const Restaurant = require('../../restaurant/models/Restaurant');
const { trim, add } = require('lodash');
const Address = require('../../helpers/mongodb/Address');
const { DEFAULT_VALIDATION } = require('../../helpers/mongodb/mongooseValidators');

const customerSchema = new mongoose.Schema({
    customer_id: {
        type: String,
        unique: true,
        default: () => generateRandomId(6), // מזהה רנדומלי באורך 6 תווים
        required: true
    },
    first_name: DEFAULT_VALIDATION,
    last_name: DEFAULT_VALIDATION,
    email: EMAIL,
    password: { type: String, required: true, trim: true },
    address: Address,
    phone_number: PONE,
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
