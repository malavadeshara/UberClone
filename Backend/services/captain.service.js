const captainModel = require('../models/captain.model');

module.exports.createCaptain = async ({
    fullname, email, password, vehicle
}) => {
    if (!fullname || !email || !password || !vehicle || !vehicle.color || !vehicle.plate || !vehicle.capacity || !vehicle.type) {
        throw new Error('All fields are required');
    }
    
    const captain = captainModel.create({
        fullname,
        email,
        password,
        vehicle
    });

    return captain;
}