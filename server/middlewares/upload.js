const multer = require('multer');
const path = require('path');

// הגדרת אחסון הקבצים בשרת
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // שמירה בתיקיית uploads
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueName); // שם ייחודי לכל קובץ
    }
});

// מסנן קבצים (לאפשר רק תמונות)
const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only JPEG, PNG, and GIF are allowed.'));
    }
};

const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 } // גודל קובץ מקסימלי: 5MB
});

module.exports = upload;
