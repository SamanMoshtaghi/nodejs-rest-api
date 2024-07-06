const { body, validationResult } = require('express-validator');
const User = require('../models/userModel');

// Validation rules
const userValidationRules = [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Invalid email'),
    body('age').isInt({ min: 1 }).withMessage('Age must be a positive integer')
];

// Validation middleware
const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

// Update controller functions to include validation
const createUser = [
    userValidationRules,
    validate,
    async (req, res) => {
        const { name, email, age } = req.body;
        try {
            const user = new User({ name, email, age });
            await user.save();
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
];

module.exports = {
    getUsers,
    createUser,
    getUserById,
    updateUserById,
    deleteUserById
};
