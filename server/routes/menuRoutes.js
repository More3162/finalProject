const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');

// מסלולים לתפריט
router.post('/', menuController.createMenuItem);
router.get('/', menuController.getAllMenuItems);
router.get('/:id', menuController.getMenuItemById);
router.put('/:id', menuController.updateMenuItem);
router.delete('/:id', menuController.deleteMenuItem);

module.exports = router;




/* const express = require('express');
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

module.exports = router; */