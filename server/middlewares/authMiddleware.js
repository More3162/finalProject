const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // המידע מה-token (כגון מזהה המשתמש)
        next();
    } catch (ex) {
        res.status(400).json({ message: 'Invalid token.' });
    }
};