const express = require('express');
const router = express.Router();
const customerController = require('../../controllers/customerAccessDataService');

// מסלולים ללקוחות
router.post('/register', customerController.register);
router.post('/login', customerController.login);

module.exports = router;

