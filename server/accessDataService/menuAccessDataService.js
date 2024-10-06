const MenuItem = require('../models/Menu');

// יצירת פריט חדש
const createMenuItem = async (req, res) => {
    try {
        const menuItem = new MenuItem(req.body);
        console.log(menuItem);
        await menuItem.save();

        res.status(201).json(menuItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// עדכון פריט קיים
const updateMenuItem = async (req, res) => {
    try {
        // עדכון פריט התפריט לפי ה-ID
        const menuItem = await MenuItem.findByIdAndUpdate(req.params.id, req.body)
        // אם פריט התפריט לא נמצא
        if (!menuItem) {
            return res.status(404).json({ message: 'Menu item not found' });
        }
        // החזרת פריט התפריט המעודכן
        res.status(200).json(menuItem);
        //שומר את הפריט החדש
        await menuItem.save();
    } catch (error) {
        // טיפול בשגיאות כלליות
        res.status(500).json({ message: 'Server error: ' + error.message });
    }
};

// מחיקת פריט קיים
const deleteMenuItem = async (req, res) => {
    try {
        const menuItem = await MenuItem.findByIdAndDelete(req.params.id);
        if (!menuItem) return res.status(404).json({ message: 'Menu item not found' });
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


// קריאה לכל הפריטים בתפריט
const getAllMenuItems = async (req, res) => {
    try {
        const { restaurant_id } = req.params
        const menuItems = await MenuItem.find({ restaurant_id });
        res.json(menuItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createMenuItem,
    updateMenuItem,
    deleteMenuItem,
    getAllMenuItems
};