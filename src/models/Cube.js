const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true,
      maxlength:100
    }, 
    imageUrl: {
      type: String,
      required: true,
      //validate: [/^https?:\/\//, 'invalid img url' ]
      validate:{
        validator: function(value){
          return  /^https?:\/\//.test(value) 
        },
        message: (props)=> `Image Url ${props.value} is invalid!`
      }

    },
    creatorId:{
      type: String,
      required: true
    },
    difficulty: {
      type: Number,
      required: true,
      min: 1,
      max: 5
    },
    accessories: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Accessory'
      }
    ]
});

const Cube = mongoose.model('Cube' ,cubeSchema);

module.exports = Cube; 