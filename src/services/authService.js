const bcrypt = require('bcrypt');
const res = require('express/lib/response');
const User = require('../models/User');

const saultRounds = 10;

exports.register = async ({username, password, repeatPassword}) => {
    if (password !== repeatPassword) {
        return false;
    }

    let hashedPass = await bcrypt.hash(password, saultRounds);

    let createdUser = User.create({
        username,
        password: hashedPass
    })
    return createdUser;
};
exports.login = async ({username, password}) =>{
    let user = await User.findOne({username});

    if (!user) {
        return false;
    }
 
    let isValid = await bcrypt.compare(password, user.password);

    return isValid;
} 
