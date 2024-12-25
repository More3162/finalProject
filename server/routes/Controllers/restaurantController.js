const express = require('express');
const restaurantController = require('../../accessDataService/restaurantAccessDataService');
const authMiddleware = require('../../middlewares/authMiddleware');


// מסלולים למסעדות
//controler
const router = express.Router();


//לעשות פונקציה שבה אוכל להגיע לכל המסעדות
router.get("/", async (req, res) => {
    try {
        const restaurants = await restaurantController.getAllRes();
        res.status(200).json(restaurants);
    } catch (error) {
        console.error("Error fetching all restaurants:", error.message);
        res.status(500).json({ message: error.message });
    }
});


// מסעדה ספיציפית 
router.get('/:id',  async (req, res) => {
    try {
        const { id } = req.params;
        const restaurant = await restaurantController.getRes(id);
        res.status(200).json(restaurant);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/register', async (req, res) => {
    try {
        const newRestaurant = await restaurantController.resRegister(req.body);
        console.log("New Restaurant added");
        res.status(201).json(newRestaurant);
    } catch (error) {
        console.error("Error:", error);
        res.status(400).json({ message: error.message });
    }
});



router.post('/login', async (req, res) => {
    console.log("Received data:", req.body);
    try {
        const token = await restaurantController.resLogin(req.body.email, req.body.password);
        res.status(200).json(token);
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: error.message });
    }
});



module.exports = router;


