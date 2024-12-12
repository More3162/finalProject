const MenuItem = require('../models/Menu');

// יצירת פריט חדש
const createMenuItem = async (newMenuItem) => {
    const menuItem = new MenuItem(newMenuItem);
    console.log(menuItem);
    return await menuItem.save();
};

// עדכון פריט קיים
const updateMenuItem = async (req, res) => {
    // עדכון פריט התפריט לפי ה-ID
    const menuItem = await MenuItem.findByIdAndUpdate(req.params.id, req.body)
    // אם פריט התפריט לא נמצא
    if (!menuItem) throw new Error('Menu item not found');
    // החזרת פריט התפריט המעודכן
    //שומר את הפריט החדש
    return await menuItem.save();
};

// מחיקת פריט קיים
const deleteMenuItem = async (req, res) => {
    const menuItem = await MenuItem.findByIdAndDelete(req.params.id);
    if (!menuItem) throw new Error('Menu item not found');
};


// קריאה לכל הפריטים בתפריט
const getAllMenuItems = async (req, res) => {
    const { restaurant_id } = req.params
    const menuItems = await MenuItem.find({ restaurant_id });
    return menuItems;
};

module.exports = {
    createMenuItem,
    updateMenuItem,
    deleteMenuItem,
    getAllMenuItems
};