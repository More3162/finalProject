const mongoose = require('mongoose');
const MenuItem = require('../../menu/models/MenuItem');
const Customer = require('../../customer/models/Customer');
const Restaurant = require('../../restaurant/models/Restaurant');
const generateRandomId = require('../../helpers/generateRandomId');
const Address = require('../../helpers/mongodb/Address');

// הגדרת סכמה להזמנה
const orderSchema = new mongoose.Schema({
    _id: generateRandomId(), // מזהה ייחודי להזמנה
    customerId: {
        type: mongoose.Schema.Types.ObjectId, // מזהה הלקוח
        ref: Customer,
        required: true
    },
    restaurantId: {
        type: mongoose.Schema.Types.ObjectId, // מזהה המסעדה
        ref: Restaurant,
        required: true
    },
    items: [
        {
            menuItemId: {
                type: mongoose.Schema.Types.ObjectId, // מזהה הפריט בתפריט
                ref: MenuItem,
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                min: 1
            }
        }
    ],
    totalPrice: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'In Process', 'Completed', 'Cancelled'], // סטטוס ההזמנה
        default: 'Pending'
    },
    orderDate: {
        type: Date,
        default: Date.now
    },
    deliveryAddress: Address,
});

module.exports = mongoose.model('Order', orderSchema);