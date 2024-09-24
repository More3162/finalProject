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

// עדכון פריט קיים
exports.updateMenuItem = async (req, res) => {
    try {
        const menuItem = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!menuItem) return res.status(404).json({ message: 'Menu item not found' });
        res.json(menuItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// מחיקת פריט קיים
exports.deleteMenuItem = async (req, res) => {
    try {
        const menuItem = await MenuItem.findByIdAndDelete(req.params.id);
        if (!menuItem) return res.status(404).json({ message: 'Menu item not found' });
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// קריאה לכל הפריטים בתפריט
exports.getAllMenuItems = async (req, res) => {
    try {
        const menuItems = await MenuItem.find();
        res.json(menuItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


