const express = require('express');
const mongoose = require('mongoose');
const connectToDb = require('./DB/dbService');
const dotenv = require('dotenv');
const chalk = require('chalk');
const config = require('config');
const router = require('./routes/routes');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use(router);



app.listen(PORT, () => {
    console.log(chalk.blue("app is listening to port " + PORT));
    connectToDb();

});


