const mongoose = require("mongoose");
const Address = require("../helpers/mongodb/Address");
const {
  DEFAULT_VALIDATION,
  EMAIL,
  PHONE,
} = require("../helpers/mongodb/mongooseValidators");

// הגדרת סכמה להזמנה
const orderSchema = new mongoose.Schema({
  customer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  restaurant_id: {
    type: mongoose.Schema.Types.ObjectId, // מזהה המסעדה
    ref: "Restaurant",
    required: true,
  },
  contact: {
    first_name: DEFAULT_VALIDATION,
    last_name: DEFAULT_VALIDATION,
    email: { ...EMAIL, unique: false },
    address: Address,
    phone_number: PHONE,
  },
  items: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId, // מזהה הפריט בתפריט
        ref: "MenuItem",
        required: true,
      },
      name: {
        type: String,
        default: "",
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
      price: {
        type: Number,
        default: 0,
      },
    },
  ],
  totalPrice: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    enum: ["Pending", "In Process", "Completed", "Cancelled"], // סטטוס ההזמנה
    default: "Pending",
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
