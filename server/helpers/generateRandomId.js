const crypto = require('crypto');

// פונקציה ליצירת מזהה רנדומלי
const generateRandomId = (length = 6) => {
    return crypto.randomBytes(length).toString('hex').slice(0, length);
};

module.exports = generateRandomId;

