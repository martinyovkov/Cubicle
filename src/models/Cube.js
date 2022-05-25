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
          },
          {
            id: 'qpfp73asl3lqlrqh',
            name: 'sad cube ',
            description: 'dsdasad',
            imageUrl: 'https://static.wikia.nocookie.net/justshapesandbeats/images/b/b8/Friend.png/revision/latest?cb=20181104123324',
            difficulty: '4'
          },
          {
            id: 'qpfp73asl3lqn5rr',
            name: 'Pyramid cube',
            description: 'asaaad',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61cJE0vAo1L._AC_SL1200_.jpg',
            difficulty: '5'
          },
          {
            id: 'qpfp73asl3lqnshy',
            name: 'Cute cube',
            description: 'asd',
            imageUrl: 'https://i.pinimg.com/originals/4d/43/48/4d4348b7d26e182533d278d3d6e4f29f.jpg',
            difficulty: '1'
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