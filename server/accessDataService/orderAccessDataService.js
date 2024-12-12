const { model } = require('mongoose');
const MenuItem = require('../models/Menu');
const Order = require('../models/Orders');
const Customer = require('../models/Users');
const Restaurant = require('../models/Restaurant')


// הוספת הזמנה חדשה
const createOrder = async (orderDetails) => {
    const { customer_id, restaurant_id, items, contact } = orderDetails;
    // משיכת פרטי הלקוח (כולל כתובת)
    const customer = await Customer.findById(customer_id);

    if (!customer) {
        throw new Error("no customer!")
    }
    let totalPrice = 0;

    //הכנסת כל הפריטים להזמנה
    const tasks = items.map((item) => {
        return MenuItem.findById(item.id).then(({ name, price }) => {
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
        contact
    });

    await order.save();
    return order;
};


/* //קבלת הזמנה על פי סטטוס הזמנה
const getOrdersByStatus = async (req, res) => {
    try {
        const orders = await Order.find();
        return orders.map(orders => _.omit(orders.toObject()))
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}; */

// קבלת כל ההזמנות
const getOrders = async (restaurant_id) => {
    try {
        const restaurant = await Restaurant.findOne({ _id: restaurant_id });
        if (!restaurant) {
            throw new Error("Restaurant not found");
        }

        const orders = await Order.find({ restaurant_id });
        return orders;
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// עדכון סטטוס הזמנה
const updateOrderStatus = async (order_id, newStatus) => {
    try {
        const order = await Order.findById(order_id);
        if (!order) {
            throw new Error('Order not found');
        }
        order.status = newStatus;
        await order.save();
        return order;
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// מחיקת הזמנה
const deleteOrder = async (order_id) => {
    try {
        const order = await Order.findByIdAndDelete(order_id); // Correct query
        if (!order) {
            throw new Error('Order not found');
        }
        return { message: 'Order deleted' }; // Return success message
    } catch (error) {
        throw new Error(error.message); // Throw error for route handler to catch
    }
};

module.exports = {
    createOrder,
    getOrders,
    updateOrderStatus,
    deleteOrder
};