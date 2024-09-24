const mongoose = require('mongoose');

const Joi = require('joi');

const restaurantSchema = Joi.object({

    id: Joi.string().guid({ version: 'uuidv4' }).required(),  // מזהה ייחודי למסעדה

    name: Joi.string().min(2).max(100).required(),            // שם המסעדה

    address: Joi.object({
        street: Joi.string().min(2).max(100).required(),       // שם הרחוב
        city: Joi.string().min(2).max(50).required(),          // שם העיר
    }).required(),

    phone: Joi.string().pattern(/^[0-9]{10}$/).required(),     // מספר טלפון של המסעדה

    email: Joi.string().email().optional(),                   // אימייל של המסעדה (לא חובה)

    openingHours: Joi.object({
        sunday: Joi.string().required(),                      // שעות פתיחה ביום ראשון
        monday: Joi.string().required(),                      // שעות פתיחה ביום שני
        tuesday: Joi.string().required(),                     // שעות פתיחה ביום שלישי
        wednesday: Joi.string().required(),                   // שעות פתיחה ביום רביעי
        thursday: Joi.string().required(),                    // שעות פתיחה ביום חמישי
        friday: Joi.string().required(),                      // שעות פתיחה ביום שישי
        saturday: Joi.string().required()                     // שעות פתיחה ביום שבת
    }).required(),

    cuisineType: Joi.string().valid('Italian', 'Asian', 'Mexican', 'American', 'Indian', 'French', 'Mediterranean').required(), // סוג המטבח

    rating: Joi.number().min(0).max(5).default(0),            // דירוג המסעדה (בין 0 ל-5), ערך ברירת מחדל הוא 0

    menu: Joi.array().items(menuItemSchema).min(1).required(), // תפריט המסעדה (לפחות פריט אחד)

    regularCustomers: [customerSchema], // כאן תתווסף רשימת הלקוחות הקבועים

    createdAt: Joi.date().default(() => new Date(), 'current date'),  // תאריך יצירת המסעדה
});

const restaurantModel = mongoose.model('Restaurant', restaurantSchema);

