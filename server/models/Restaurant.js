const mongoose = require('mongoose');
const generateRandomId = require('../helpers/generateRandomId');
const MenuItem = require('./Menu');
const Address = require('../helpers/mongodb/Address');
const { PHONE, DEFAULT_VALIDATION, EMAIL } = require('../helpers/mongodb/mongooseValidators');

const restaurantSchema = new mongoose.Schema({
    name: DEFAULT_VALIDATION,
    address: Address,
    phone: PHONE,
    email: EMAIL,
    password: {
        type: String,
        required: true,
    },
    opening_hours: {
        monday: String,
        tuesday: String,
        wednesday: String,
        thursday: String,
        friday: String,
        saturday: String,
        sunday: String,
    },
    isAdmin: {
        type: Boolean,
        default: true,
    }
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
module.exports = Restaurant;
