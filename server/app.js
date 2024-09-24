const express = require('express');
const mongoose = require('mongoose');
const connectToDb = require('./DB/dbService');
const restaurantRoutes = require('./routes/restaurantRoutes');
const customerRoutes = require('./routes/customerRoutes');
const menuItemRoutes = require('./routes/menuRoutes');
const dotenv = require('dotenv');
const chalk = require('chalk');
const config = require('config');
const restaurantRoutes = require('./routes/restaurantRoutes');
const customerRoutes = require('./routes/customerRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/restaurants', restaurantRoutes);
app.use('/customers', customerRoutes);
app.use('/menu-items', menuItemRoutes);


app.listen(PORT, () => {
    console.log(chalk.blue("app is listening to port " + PORT));
    connectToDb();
});


