const express = require('express');
const cubeService = require('../services/cubeServices');

const router = express.Router();
 
const renderCreateCube = (req, res)=>{
    let cubes = cubeService.getAll();
    console.log(cubes);

    res.render('create');
}

const createCube = (req, res)=>{
    let {name, description, imageUrl, difficultyLevel} = req.body;

    cubeService.create(name, description, imageUrl, difficultyLevel);

    res.redirect('/')

}


router.get('/create', renderCreateCube);
router.post('/create', createCube);

module.exports = router;