const Order = require('../models/Orders');
const Customer = require('../models/Users');


// הוספת הזמנה חדשה
exports.createOrder = async (req, res) => {
    try {
        const { customerId, restaurantId, items, totalPrice } = req.body;

        // משיכת פרטי הלקוח (כולל כתובת)
        const customer = await Customer.findById(customerId);
        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }

        // יצירת ההזמנה עם הכתובת של הלקוח
        const order = new Order({
            customerId,
            restaurantId,
            items,
            totalPrice,
            deliveryAddress: customer.address // שימוש בכתובת של הלקוח מהמודל
        });

        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// קבלת כל ההזמנות
exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//קבלת הזמנה על פי סטטוס הזמנה
exports.getOrdersByStatus = async (req, res) => {
    try {
        const orders = await Order.find({ status: req.params.status });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//עדכון פריטים בהזמנה
exports.updateOrderItems = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        order.items = req.body.items;
        await order.save();
        res.json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// עדכון סטטוס הזמנה
exports.updateOrderStatus = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        order.status = req.body.status;
        await order.save();
        res.json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// מחיקת הזמנה
exports.deleteOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        await order.remove();
        res.json({ message: 'Order deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};