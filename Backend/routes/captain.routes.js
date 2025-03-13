const express = require('express');
const router = express.Router();
const captainController = require('../controllers/captain.controller');
const authMiddleware = require('../middlewares/auth.middleware');
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


router.post('/login', [
    body('email').isEmail().withMessage('Please provide a valid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
], captainController.loginCaptain);


router.get('/profile', authMiddleware.authCaptain, captainController.getProfile);


router.get('/logout', authMiddleware.authCaptain, captainController.logoutCaptain);

module.exports = router;