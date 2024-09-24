const express = require('express');
const router = express.Router();
const Customer = require('../users/models/Users');

// יצירת לקוח חדש
router.post('/', async (req, res) => {
    const customer = new Customer(req.body);
    try {
        await customer.save();
        res.status(201).send(customer);
    } catch (error) {
        res.status(400).send(error);
    }
});

// קבלת כל הלקוחות
router.get('/', async (req, res) => {
    try {
        const customers = await Customer.find();
        res.send(customers);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;