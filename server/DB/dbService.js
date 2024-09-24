const connectToAtlas = require('./mongoDB/connectToAtlas');
const connectToMongoDb = require('./mongoDB/connectToMongoDb');

const config = require("config");

const ENVIRONMENT = config.get("ENVIRONMENT");

const connectToDb = async () => {
    if (ENVIRONMENT === "development") {
        await connectToMongoDb();
    }
    if (ENVIRONMENT === "production") {
        await connectToAtlas();
    }
}