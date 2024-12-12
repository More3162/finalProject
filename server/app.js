const express = require('express');
const mongoose = require('mongoose');
const connectToDb = require('./DB/dbService');
const dotenv = require('dotenv');
const chalk = require('chalk');
const config = require('config');
const router = require('./routes/routes');
const corsMiddleware = require('./middlewares/cors'); // Ensure correct import
const seedDatabase = require('./seed/seedDatabase');
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

// Use CORS middleware first
app.use(corsMiddleware); // No parentheses; use the middleware directly
app.use(express.json());

app.use((req, res, next) => {
    console.log(chalk.cyan(
        `request URL: ${req.url} | Method: ${req.method} | Time: ${new Date()}`
    ));
    next();
});

app.use(router);

app.listen(PORT, async () => {
    await connectToDb();
    await seedDatabase();
    console.log(chalk.blue("app is listening to port " + PORT));
});
