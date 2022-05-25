const Cube = require("../models/Cube");


const create = (name, description, imageUrl, difficulty) =>{
    let cube = new Cube(name, description, imageUrl, difficulty);

    Cube.add(cube);
};

const getAll = () => Cube.getAll(); 

const getById = (id)=>{
    return Cube.getAll().find(x=> x.id == id);
}

const cubeService = {
    create,
    getAll,
    getById 
};

module.exports = cubeService;