const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        console.log("Decoded token user id:", req.user.id);  // לוג של ה-ID מה-token
        next();
    } catch (ex) {
        console.error("Error decoding token:", ex);  // לוג של שגיאה
        res.status(400).json({ message: 'Invalid token.' });
    }
};
