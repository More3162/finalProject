const mongoose = require('mongoose');
const generateRandomId = require('../helpers/generateRandomId');
const MenuItem = require('./Menu');
const Address = require('../helpers/mongodb/Address');
const { PHONE, DEFAULT_VALIDATION, EMAIL } = require('../helpers/mongodb/mongooseValidators');

const restaurantSchema = new mongoose.Schema({
    restaurant_id: {
        type: String,
        unique: true,
        default: () => generateRandomId(6), // מזהה רנדומלי באורך 6 תווים
        required: true
    },
    name: DEFAULT_VALIDATION,
    address: Address,
    phone: PHONE,
    email: EMAIL,
    password: {
        type: String,
        required: true,
        trim: true,
    },
    opening_hours: {
        monday: String,
        tuesday: String,
        wednesday: String,
        thursday: String,
        friday: String,
        saturday: String,
        sunday: String
    },
    menu: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: MenuItem,
    }]
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

