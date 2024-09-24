const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController'); // בקרי ההזמנות
const authMiddleware = require('../middleware/authMiddleware'); // אימות JWT
const Order = require('../models/orderModel/Order'); // מודל הזמנה
const Customer = require('../models/customerModel/Customer'); // מודל לקוח
const Restaurant = require('../models/restaurantModel/Restaurant'); // מודל מסעדה
const MenuItem = require('../models/restaurantModel/menuModel/Menu'); // מודל פריט תפריט


// יצירת הזמנה חדשה
router.post('/', authMiddleware, orderController.createOrder);

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