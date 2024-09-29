const express = require('express');
const menuController = require('../../accessDataService/menuAccessDataService');
const router = express.Router();

//post new item
router.post('/newItem', async (req, res) => {
    try {
        console.log("hey!");
        const newItem = await menuController.createMenuItem(req.body, req, res);
        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});



/* 
//get item by id
router.get('/item/:id', menuController.getMenuItem);
//get all items
router.get('/allItem', menuController.getAllMenuItems);
//update item
router.put('/:id', menuController.updateMenuItem);
//delete item
router.delete('/:id', menuController.deleteMenuItem);

 */
module.exports = router;