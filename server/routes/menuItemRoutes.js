const express = require('express');
const router = express.Router();
const MenuItem = require('../restaurant/models/menuModel/Menu');

// יצירת פריט תפריט חדש
router.post('/', async (req, res) => {
    const menuItem = new MenuItem(req.body);
    try {
        await menuItem.save();
        res.status(201).send(menuItem);
    } catch (error) {
        res.status(400).send(error);
    }
});

// קבלת כל פריטי התפריט
router.get('/', async (req, res) => {
    try {
        const menuItems = await MenuItem.find();
        res.send(menuItems);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;