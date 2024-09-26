const mongoose = require('mongoose');
const MenuItem = require('../models/Menu');
const Customer = require('../models/Users');
const Restaurant = require('../models/Restaurant');
const generateRandomId = require('../helpers/generateRandomId');
const Address = require('../helpers/mongodb/Address');
const { string, required } = require('joi');


// הגדרת סכמה להזמנה
const orderSchema = new mongoose.Schema({
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
        required: true
    },
    restaurant_id: {
        type: mongoose.Schema.Types.ObjectId, // מזהה המסעדה
        ref: "Restaurant",
        required: true
    },
    items: [
        {
            item_id: {
                type: mongoose.Schema.Types.ObjectId, // מזהה הפריט בתפריט
                ref: "MenuItem",
                required: true
            },
            name: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                min: 1
            },
            price: {
                type: Number,
                required: true
            }
        },
    ],
    status: {
        type: String,
        enum: ['Pending', 'In Process', 'Completed', 'Cancelled'], // סטטוס ההזמנה
        default: 'Pending'
    },
    orderDate: {
        type: Date,
        default: Date.now
    },
    deliveryAddress: Address, //למשוך את הכתובת מהלקוח
});

module.exports = mongoose.model('Order', orderSchema);