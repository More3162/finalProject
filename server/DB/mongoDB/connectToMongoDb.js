const { mongoose } = require('mongoose');

const connectToMongoDb = async () => {
    try {
        await mongoose.connect('mongodb://localhost:3030/restaurants');
        console.log('Connected to MongoDB local');
    }
    catch (error) {
        console.log('Error connecting to MongoDB');
    }
}

module.exports = connectToMongoDb;