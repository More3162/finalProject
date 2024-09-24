const mongoose = require('mongoose');

const Joi = require('joi');

const customerSchema = Joi.object({
    // מזהה ייחודי של הלקוח
    customerId: Joi.string().alphanum().min(3).max(30).required(),

    // שם פרטי ושם משפחה
    firstName: Joi.string().min(2).max(50).required(),
    lastName: Joi.string().min(2).max(50).required(),

    // כתובת אימייל
    email: Joi.string().email().required(),

    // מספר טלפון עם פורמט בינלאומי
    phone: Joi.string().pattern(/^[0-9]{10}$/).required(),

    // כתובת הלקוח
    address: Joi.object({
        street: Joi.string().min(2).max(100).required(),
        city: Joi.string().min(2).max(50).required(),
        country: Joi.string().min(2).max(50).required()
    }).required(),

    // העדפות נוספות של הלקוח כמו צמחוני, טבעוני, אלרגיות וכו'
    preferences: Joi.object({
        vegetarian: Joi.boolean(),
        vegan: Joi.boolean(),
        allergies: Joi.array().items(Joi.string().min(2).max(50))
    }),

    // פרטים נוספים או הערות
    notes: Joi.string().max(500),

    // שדה שמציין האם הלקוח הוא לקוח קבוע
    isRegularCustomer: Joi.boolean().default(false),

    // תאריך יצירת הלקוח במערכת
    createdAt: Joi.date().default(Date.now)
});


const Customer = mongoose.model('Customer', customerSchema);
