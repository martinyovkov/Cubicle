const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: {
      typr: String,
      required: true
    },
    description: {
      typr: String,
      required: true,
      maxlength:100
    }, 
    imageUrl: {
      typr: String,
      required: true
    },

    
})

module.exports = Cube;