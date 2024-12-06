const express = require('express');
const validate = require('../../middlewares/validate');
const router = express.Router();
const customerController = require('../../accessDataService/customerAccessDataService');
const loginValidation = require('../../users/validation/loginValidation');
const registerValidation = require('../../users/validation/registerValidation');
const authMiddleware = require('../../middlewares/authMiddleware');

// מסלולים ללקוחות
router.get('/:id', authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;
        if (req.user.id !== id) throw new Error();
        const customer = await customerController.getCustomer(id);
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/register', validate(registerValidation), async (req, res) => {
    try {
        const newCustomer = await customerController.register(req.body, req, res);
        console.log("New Customer add")
        res.status(200).json(newCustomer)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.post('/login', validate(loginValidation), async (req, res) => {
    try {
        const token = await customerController.login(req.body.email, req.body.password);
        console.log(token);
        res.status(200).json(token)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;

