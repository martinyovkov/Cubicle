const uniqid = require('uniqid');

class Cube{
    static #cubes = [
        { 
            id: 'adnas48axcba9xs5',
            name: 'Mirror Cube',
            description: 'The cube is made from mirror.',
            imageUrl: 'https://m.media-amazon.com/images/I/71TrvUl50OL.jpg',
            difficulty: '4'
        },
        {
            id: 'qpfp75e8l3lhptx1',
            name: 'Rubic Cube',
            description: 'Standart rubic cube',
            imageUrl: 'https://classteaching.files.wordpress.com/2019/09/rubiks-cube.jpg',
            difficulty: '3'
          }
    ]

    constructor(name, description, imageUrl, difficulty){
        this.id = uniqid();
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.difficulty = difficulty;
    }

    static getAll() {
        return Cube.#cubes.slice();
    };

    static add(cube){
        Cube.#cubes.push(cube);
    }
}

module.exports = Cube;