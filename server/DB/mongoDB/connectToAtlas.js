const { mongoose } = require('mongoose');
require('dotenv').config();

const MONGO_URL = process.env.MONGO_URL;

const connectToAtlas = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to Atlas - MongoDB');
    }
    catch (error) {
        console.log('Error connecting to Atlas');
    }
}

module.exports = connectToAtlas;