const cors = require("cors");

const corsMiddleware = cors({
    origin: [
        "http://localhost:3000", // Add more allowed origins if needed
    ],
});

module.exports = corsMiddleware; // Ensure it exports the middleware function
