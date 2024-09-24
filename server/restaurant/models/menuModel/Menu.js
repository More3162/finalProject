const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,  // מוודא שאין מספרים כפולים
        required: true,
        default: function () {
            // פונקציה ליצירת ID אוטומטי
            return this.constructor.countDocuments().exec().then(count => count + 1);
        }
    },
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    isAvailable: { type: Boolean, default: true },
    restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },  // קישור למסעדה
});

module.exports = mongoose.model('MenuItem', menuItemSchema);