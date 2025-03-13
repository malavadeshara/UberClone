const express = require('express');
const router = express.Router();
const captainController = require('../controllers/captain.controller');
const { body } = require('express-validator');

router.post('/register', [
    body('email').isEmail().withMessage('Please provide a valid email address'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('Firstname must be at least 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Vehicle color must be at least 3 characters long'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Vehicle plate must be at least 3 characters long'),
    body('vehicle.capacity').isNumeric().withMessage('Vehicle capacity must be a number'),
    body('vehicle.type').isIn(['motorcycle', 'auto', 'car']).withMessage('Invalid vehicle type'),
], captainController.registerCaptain);

module.exports = router;