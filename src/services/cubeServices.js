const Cube = require("../models/Cube");


const create = (name, description, imageUrl, difficulty) =>{
    let cube = new Cube(name, description, imageUrl, difficulty);

    Cube.add(cube);
};

const getAll = () => Cube.getAll(); 

const cubeService = {
    create,
    getAll
};

module.exports = cubeService;