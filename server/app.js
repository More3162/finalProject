const express = require('express');
const mongoose = require('mongoose');
const restaurantRoutes = require('./routes/restaurantRoutes');
const customerRoutes = require('./routes/customerRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8181;

app.use(express.json());
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/menu-items', menuItemRoutes);



mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch(err => console.error(err));


