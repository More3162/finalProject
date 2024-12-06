const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Customer = require('../models/Users');
const _ = require('lodash');

exports.register = async (newCustomer, req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const customer = new Customer({ ...req.body, password: hashedPassword });
    await customer.save();
    return _.pick(newCustomer, ['_id', 'name', 'email']);
};

exports.login = async (email, password) => {
    const customer = await Customer.findOne({ email });
    if (!customer) throw new Error("user NOT found")

    const isMatch = await bcrypt.compare(password, customer.password);
    if (!isMatch) throw new Error("Incorrect password")

    const token = jwt.sign({ id: customer._id }, process.env.JWT_SECRET);

    return token;
};

exports.getCustomer = async (id) => {
    const customer = await Customer.findById(id);
    if (!customer) throw new Error("user NOT found")
    return _.pick(customer, ['_id', 'name', 'email']);
};
