const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');

// מסלולים לתפריט
router.post('/menu', menuController.createMenuItem);
router.get('/allItem', menuController.getAllMenuItems);
router.put('/:id', menuController.updateMenuItem);
router.delete('/:id', menuController.deleteMenuItem);

module.exports = router;