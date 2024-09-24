const mongoose = require('mongoose');
const generateRandomId = require('../../../helpers/generateRandomId');
const Restaurant = require('../Restaurant');
const { DEFAULT_VALIDATION } = require('../../../helpers/mongodb/mongooseValidators');

const menuItemSchema = new mongoose.Schema({
    item_id: {
        type: String,
        unique: true,
        default: () => generateRandomId(6), // מזהה רנדומלי באורך 6 תווים
        required: true
    },
    restaurant_id: {
        type: String,
        required: true,
        ref: Restaurant // מפנה למסעדה
    },
    name: DEFAULT_VALIDATION,
    category: String, // לדוגמה: "ראשונות", "עיקריות", "קינוחים"
    price: { type: Number, required: true },
    description: DEFAULT_VALIDATION,
    is_available: { type: Boolean, default: true } // האם המנה זמינה
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);