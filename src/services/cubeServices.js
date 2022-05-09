const Cube = require("../models/Cube");

const cubeDb = [];

const create = (name, description, imageUrl, difficulty) =>{
    let cube = new Cube(name, description, imageUrl, difficulty);

    cubeDb.push(cube);
};

const getAll = ()=> cubeDb.slice(); 

const cubeService = {
    create,
    getAll
};

module.exports = cubeService;