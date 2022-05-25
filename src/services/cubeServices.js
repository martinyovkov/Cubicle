const Cube = require("../models/Cube");

const create = (name, description, imageUrl, difficulty) =>{
    let cube = new Cube(name, description, imageUrl, difficulty);

    Cube.add(cube);
};

const getAll = () => Cube.getAll(); 

const getById = (id)=>{
    return Cube.getAll().find(x=> x.id == id);
}

const search = (text, from ,to)=>{
    if (from == '' && to =='') {
         return Cube.getAll().filter(x=> x.name.toLowerCase().includes(text.toLowerCase()));
    }
    else if (to =='') {
        return Cube.getAll().filter(x=> x.name.toLowerCase().includes(text.toLowerCase()) && x.difficulty>= from);
    }
    else if (from == '') {
        return Cube.getAll().filter(x=> x.name.toLowerCase().includes(text.toLowerCase()) && x.difficulty<= to);
    }
    else{
        return Cube.getAll().filter(x=> x.name.toLowerCase().includes(text.toLowerCase()) && x.difficulty>= from && x.difficulty<= to);
    }   
}

const cubeService = {
    create,
    getAll,
    getById,
    search
};

module.exports = cubeService;