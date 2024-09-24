const chalk = require('chalk');
const { mongoose } = require('mongoose');

const connectToMongoDb = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/restaurants');
        console.log(chalk.red('Connected to MongoDB local'));
    }
    catch (error) {
        console.log('Error connecting to MongoDB');
    }
}

module.exports = connectToMongoDb;