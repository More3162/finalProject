const users = require("./users.json");
const restaurants = require("./restaurants.json");
const { register } = require("../accessDataService/customerAccessDataService");
const { resRegister } = require("../accessDataService/restaurantAccessDataService");
const { createMenuItem } = require("../accessDataService/menuAccessDataService");
const Customer = require("../models/Users");
const Restaurant = require("../models/Restaurant");
const _ = require('lodash');

async function seedRestaurant(restaurant) {
  const res = await resRegister(_.omit(restaurant, 'menu'));
  const createMenuItems = restaurant.menu.map((menuItem) => createMenuItem({ ...menuItem, restaurant_id: res._id }));
  await Promise.all(createMenuItems);
}

module.exports = async () => {
  const userCount = await Customer.countDocuments();
  const resCount = await Restaurant.countDocuments();

  if (!userCount) {
    const seedUsers = users.map(register);
    await Promise.all(seedUsers);
    console.log('Users seeded successfully');
  }

  if (!resCount) {
    const seedRestaurants = restaurants.map(seedRestaurant);
    await Promise.all(seedRestaurants);
    console.log('Restaurants seeded successfully');
  }
};
