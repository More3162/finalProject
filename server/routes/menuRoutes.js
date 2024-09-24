const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');

// מסלולים לתפריט
router.post('/', menuController.createMenuItem);
router.get('/', menuController.getAllMenuItems);
router.put('/:id', menuController.updateMenuItem);
router.delete('/:id', menuController.deleteMenuItem);

module.exports = router;