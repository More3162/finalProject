const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Customer = require('../models/Users');
const _ = require('lodash');

exports.register = async (newCustomer, req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const customer = new Customer({ ...req.body, password: hashedPassword });
        await customer.save(); res.status(201).json({ message: 'Customer created' });
        return _.pick(newCustomer, ['_id', 'name', 'email']);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.login = async (email, password) => {
    try {
        const customer = await Customer.findOne({ email });
        if (!customer) throw new Error("user NOT found")

        const isMatch = await bcrypt.compare(password, customer.password);
        if (!isMatch) throw new Error("Incorrect password")

        const token = jwt.sign({ id: customer._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        return token;
    } catch (error) {
        return Error;
    }
};



