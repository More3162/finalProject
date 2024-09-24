const MenuItem = require('../restaurant/models/menuModel/Menu');

exports.createMenuItem = async (req, res) => {
    try {
        const menuItem = new MenuItem(req.body);
        await menuItem.save();
        res.status(201).json(menuItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// פונקציות נוספות כמו getAllMenuItems, getMenuItemById, updateMenuItem, deleteMenuItem
