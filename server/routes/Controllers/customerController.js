const express = require('express');
const router = express.Router();
const customerController = require('../../accessDataService/customerAccessDataService');
const { cache } = require('joi');

// מסלולים ללקוחות
router.post('/register', async (req, res) => {
    try {
        const newCustomer = await customerController.register(req.body, req, res);
        console.log("New Customer add")
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


router.post('/login', async (req, res) => {
    try {
        const customerLogin = await customerController.login(req.body.email, req.body.password);
        res.status(200).json(customerLogin);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;

