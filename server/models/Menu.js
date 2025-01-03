const mongoose = require("mongoose");
const generateRandomId = require("../helpers/generateRandomId");
const Restaurant = require("./Restaurant");
const { DEFAULT_VALIDATION } = require("../helpers/mongodb/mongooseValidators");

const menuItemSchema = new mongoose.Schema({
  restaurant_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
  },
  name: DEFAULT_VALIDATION,
  category: {
    type: String,
    enum: ["Main", "Starters", "Dessert"], // הערכים המותרים
    required: true,
  },
  price: { type: Number, required: true },
  description: DEFAULT_VALIDATION,
  is_available: { type: Boolean, default: true }, // האם המנה זמינה
  imageUrl: String,
});

const MenuItem = mongoose.model("MenuItem", menuItemSchema);
module.exports = MenuItem;
