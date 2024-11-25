const cors = require("cors");

const corsMiddleware = cors({
    origin: [
        "http://localhost:5173", // Add more allowed origins if needed
    ],
});

module.exports = corsMiddleware; // Ensure it exports the middleware function
