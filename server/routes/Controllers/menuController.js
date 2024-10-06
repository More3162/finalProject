const express = require('express');
const menuController = require('../../accessDataService/menuAccessDataService');
const router = express.Router();

//post new item
router.post('/newItem', async (req, res) => {
    try {
        const newItem = await menuController.createMenuItem(req, res);
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
router.put('/:id', async (req, res) => {
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
        res.status(201).json({ message: error.message })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
});



module.exports = router;