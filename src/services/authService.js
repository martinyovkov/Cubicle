const bcrypt = require('bcrypt');
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

}
