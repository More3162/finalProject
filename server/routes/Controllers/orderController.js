const express = require('express');
const router = express.Router();
const orderController = require('../../accessDataService/orderAccessDataService'); // בקרי ההזמנות
const authMiddleware = require('../../middlewares/authMiddleware'); // אימות JWT



// יצירת הזמנה חדשה
router.post('/newOrder', async (req, res) => {
    try {
        const newOrder = await orderController.createOrder(req.body);
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


/* 
// קבלת הזמנה על פי סטטוס הזמנה
router.get('/status', async (req, res) => {
    try {
        const orderStatus = await orderController.getOrdersByStatus(req.body);
        res.status(201).json(orderStatus);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}); */


// קבלת כל ההזמנות
router.get('/:id', authMiddleware, async (req, res) => {
    try {
        const allOrders = await orderController.getOrders(req.params.id)
        res.status(201).json(allOrders);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});


// עדכון סטטוס הזמנה
router.patch('/:id', authMiddleware, async (req, res) => {
    try {
        const updatedOrder = await orderController.updateOrderStatus(req.params.id, req.body.status);
        res.status(201).json(updatedOrder)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// מחיקת הזמנה לפי מזהה הזמנה
router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        const orderToDelete = await orderController.deleteOrder(req.params.id); // Pass order ID
        res.status(200).json(orderToDelete); // Use 200 for successful deletion
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;