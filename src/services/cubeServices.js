const Cube = require("../models/Cube");

const cubeDb = [
    {
        name: 'Mirror Cube',
        description: 'The cube is made from mirror.',
        imageUrl: 'https://m.media-amazon.com/images/I/71TrvUl50OL.jpg',
        difficulty: '4'
    }

];

const create = (name, description, imageUrl, difficulty) =>{
    let cube = new Cube(name, description, imageUrl, difficulty);

    cubeDb.push(cube);
};

const getAll = () => cubeDb.slice(); 

const cubeService = {
    create,
    getAll
};

module.exports = cubeService;