const express = require('express');
const { Router } = express.Router();
const restaurantController = require('../controllers/restaurantController');


// מסלולים למסעדות

const router = Router();

router.post('/resRegister', async (req, res) => {
    try {
        const newRestaurant = await restaurantController.resRegister(req.body);
        res.status(201).json(newRestaurant);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


router.post('/resLogin', async (req, res) => {
    try {
        const token = await restaurantController.resLogin(req.body.email, req.body.password);
        res.status(200).json({ token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


module.exports = router;


