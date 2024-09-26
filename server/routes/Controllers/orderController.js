const express = require('express');
const router = express.Router();
const orderController = require('../../controllers/orderAccessDataService'); // בקרי ההזמנות
const authMiddleware = require('../../middlewares/authMiddleware'); // אימות JWT



// יצירת הזמנה חדשה
router.post('/newOrder', authMiddleware, orderController.createOrder);

// קבלת הזמנה על פי סטטוס הזמנה
router.get('/status', authMiddleware, orderController.getOrdersByStatus);

// קבלת כל ההזמנות
router.put('/:id', authMiddleware, orderController.getOrders);

// עדכון פריטים בהזמנה
router.patch('/:id', authMiddleware, orderController.updateOrderItems);

// עדכון סטטוס הזמנה
router.patch('/:id', authMiddleware, orderController.updateOrderStatus);

// מחיקת הזמנה לפי מזהה הזמנה
router.delete('/:id', authMiddleware, orderController.deleteOrder);

module.exports = router;