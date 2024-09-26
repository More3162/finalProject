const express = require('express');
const mongoose = require('mongoose');
const connectToDb = require('./DB/dbService');
const restaurantRoutes = require('./routes/Controllers/restaurantController');
const customerRoutes = require('./routes/Controllers/customerController');
const menuItemRoutes = require('./routes/Controllers/menuController');
const orderRoutes = require('./routes/Controllers/orderController');
const dotenv = require('dotenv');
const chalk = require('chalk');
const config = require('config');
/* const router = require('./routes/Controllers/restaurantController'); */
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

/* app.use(router); */


app.use('/restaurants', restaurantRoutes);
app.use('/customers', customerRoutes);
app.use('/menu-items', menuItemRoutes);
app.use('/orders', orderRoutes);




app.listen(PORT, () => {
    console.log(chalk.blue("app is listening to port " + PORT));
    connectToDb();

});


