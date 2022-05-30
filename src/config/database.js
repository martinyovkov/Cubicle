const mongoose = require('mongoose');
const config = require('./config.json');

function initDatabase(connectionString){
    return mongoose.connect(connectionString); 
}

module.exports= initDatabase;

