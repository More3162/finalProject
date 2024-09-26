const express = require('express');
const restaurantController = require('../../controllers/restaurantAccessDataService');


// מסלולים למסעדות
//controler
const router = express.Router();

router.post('/resRegister', async (req, res) => {
    try {
        console.log("hey!");
        const newRestaurant = await restaurantController.resRegister(req.body, req, res);
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


