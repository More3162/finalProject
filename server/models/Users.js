const mongoose = require('mongoose');
const generateRandomId = require('../helpers/generateRandomId');
const Restaurant = require('./Restaurant');
const { trim, add } = require('lodash');
const Address = require('../helpers/mongodb/Address');
const { DEFAULT_VALIDATION, PHONE, EMAIL } = require('../helpers/mongodb/mongooseValidators');

const customerSchema = new mongoose.Schema({
    first_name: DEFAULT_VALIDATION,
    last_name: DEFAULT_VALIDATION,
    email: EMAIL,
    password: { type: String, required: true },
    address: Address,
    phone_number: PHONE,
    order_history: [{
        order_id: String,
        order_date: { type: Date, default: Date.now },
    }]
});

const Customer = mongoose.model('Customer', customerSchema);
