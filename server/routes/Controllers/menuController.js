const express = require('express');
const menuController = require('../../accessDataService/menuAccessDataService');
const router = express.Router();
const authMiddleware = require('../../middlewares/authMiddleware')
const upload = require('../../middlewares/upload')

//post new item
router.post('/newItem', authMiddleware, async (req, res) => {
    try {
        const newItem = await menuController.createMenuItem({ ...req.body, restaurant_id: req.user?.id });
        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//get all items
router.get('/:restaurant_id', async (req, res) => {
    try {
        const allItems = await menuController.getAllMenuItems(req, res);
        res.status(201).json(allItems);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//update item
router.put('/:id', authMiddleware, async (req, res) => {
    try {
        const updateItem = await menuController.updateMenuItem(req, res);
        res.status(201).json(updateItem);
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
});


//delete item
router.delete('/:id', async (req, res) => {
    try {
        const deleteItem = await menuController.deleteMenuItem(req, res);
        console.log(deleteItem);
        res.status(201).json({ message: 'OK' })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
});

module.exports = router;