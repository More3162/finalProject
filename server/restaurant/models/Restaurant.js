const mongoose = require('mongoose');
const generateRandomId = require('../../helpers/generateRandomId');
const MenuItem = require('./menuModel/Menu');

const restaurantSchema = new mongoose.Schema({
    restaurant_id: {
        type: String,
        unique: true,
        default: () => generateRandomId(6), // מזהה רנדומלי באורך 6 תווים
        required: true
    },
    name: {
        type: String,
        required: true
    },
    location: {
        address: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
    },
    phone: String,
    email: String,
    opening_hours: {
        monday: String,
        tuesday: String,
        wednesday: String,
        thursday: String,
        friday: String,
        saturday: String,
        sunday: String
    },
    menu_items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MenuItem'
    }]
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

