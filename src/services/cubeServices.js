const Cube = require("../models/Cube");

const create = (name, description, imageUrl, difficulty) =>{
    let cube = new Cube({
        name, 
        description, 
        imageUrl, 
        difficulty
    });
 

   return cube.save();
};

const getAll = () => Cube.find({}).lean(); 

const getById = (id)=>{
    return Cube.findById(id);
}

const search = (text, from ,to)=>{
    if (from == '' && to =='') {
         return getAll().filter(x=> x.name.toLowerCase().includes(text.toLowerCase()));
    }
    else if (to =='') {
        return getAll().filter(x=> x.name.toLowerCase().includes(text.toLowerCase()) && x.difficulty>= from);
    }
    else if (from == '') {
        return getAll().filter(x=> x.name.toLowerCase().includes(text.toLowerCase()) && x.difficulty<= to);
    }
    else{
        return getAll().filter(x=> x.name.toLowerCase().includes(text.toLowerCase()) && x.difficulty>= from && x.difficulty<= to);
    }   
}

const cubeService = {
    create,
    getAll,
    getById,
    search
};

module.exports = cubeService;