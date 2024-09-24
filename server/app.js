const express = require('express');
const mongoose = require('mongoose');
const restaurantRoutes = require('./routes/restaurantRoutes');
const customerRoutes = require('./routes/customerRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');
const dotenv = require('dotenv');
const chalk = require('chalk');

const connectToDb = require('./DB/dbService');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8181;

app.use(express.json());
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/menu-items', menuItemRoutes);


app.listen(PORT, () => {
    console.log(chalk.blue("app is listening to port " + PORT));
    connectToDb();
});


