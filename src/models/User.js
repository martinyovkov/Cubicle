const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, 'Username is required!'],
        unique: [true, 'This username is already taken!'],
        validate: /[a-zA-Z0-9]/,
        minlength: 5
    },
    password:{
        type: String,
        required: [true,'Password is required!'],
        validate: /[a-zA-Z0-9]/,
        minlength:8
    }  
});

const User = mongoose.model('User', userSchema);
module.exports = User;