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
router.get('/status', authMiddleware, orderController.getOrdersByStatus);

// קבלת כל ההזמנות
router.put('/', authMiddleware, orderController.getOrders);


// עדכון סטטוס הזמנה
router.patch('/:id', authMiddleware, orderController.updateOrderStatus);

// מחיקת הזמנה לפי מזהה הזמנה
router.delete('/:id', authMiddleware, orderController.deleteOrder);
 */
module.exports = router;