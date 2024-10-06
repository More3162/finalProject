const { model } = require('mongoose');
const MenuItem = require('../models/Menu');
const Order = require('../models/Orders');
const Customer = require('../models/Users');


// הוספת הזמנה חדשה
const createOrder = async (orderDetails) => {
    try {
        const { customer_id, restaurant_id, items } = orderDetails;
        // משיכת פרטי הלקוח (כולל כתובת)
        const customer = await Customer.findById(customer_id);

        if (!customer) {
            throw new Error("no customer!")
        }
        let totalPrice = 0;

        //הכנסת כל הפריטים להזמנה
        const tasks = items.map((item) => {
            return MenuItem.findById(item.menuItem_id).then(({ name, price }) => {
                item.name = name;
                item.price = price;
                totalPrice += item.price * item.quantity;
            })
        })
        await Promise.all(tasks)


        // יצירת ההזמנה עם הכתובת של הלקוח
        const order = new Order({
            customer_id,
            restaurant_id,
            items,
            totalPrice,
            deliveryAddress: customer.address // שימוש בכתובת של הלקוח מהמודל
        });

        await order.save();
        return order;
    } catch (error) {
        return error.message;
    }
};


//קבלת הזמנה על פי סטטוס הזמנה
/* const getOrdersByStatus = async (orderDetails) => {
    try {
        const orders = await Order.find({ status: orderDetails.status });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}; */

/* // קבלת כל ההזמנות
exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}; */


// עדכון סטטוס הזמנה
/* exports.updateOrderStatus = async (req, res) => {
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
}; */

// מחיקת הזמנה
/* exports.deleteOrder = async (req, res) => {
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
}; */

module.exports = {
    createOrder,
};