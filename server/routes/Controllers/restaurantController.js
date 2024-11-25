const express = require('express');
const restaurantController = require('../../accessDataService/restaurantAccessDataService');
const authMiddleware = require('../../middlewares/authMiddleware');


// מסלולים למסעדות
//controler
const router = express.Router();

router.get('/:id', authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;
        if (req.user.id !== id) throw new Error();
        const res = await restaurantController.getRes(id);
        res.status(200).json(res);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/register', async (req, res) => {
    try {
        const newRestaurant = await restaurantController.resRegister(req.body, req, res);
        res.status(201).json(newRestaurant);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


router.post('/login', async (req, res) => {
    try {
        const token = await restaurantController.resLogin(req.body.email, req.body.password);
        res.status(200).json({ token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


module.exports = router;


