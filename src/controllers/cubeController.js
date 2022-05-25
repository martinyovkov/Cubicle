const express = require('express');
const cubeService = require('../services/cubeServices');

const router = express.Router();
 
const renderCreateCube = (req, res)=>{
    res.render('create');
}

const createCube = (req, res)=>{
    let {name, description, imageUrl, difficultyLevel} = req.body;

    cubeService.create(name, description, imageUrl, difficultyLevel);

    res.redirect('/')
}

const cubeDetails = (req, res) =>{
    let cube = cubeService.getById(req.params.cubeId);

    res.end(); 
    
    console.log(cube);
}


router.get('/create', renderCreateCube);
router.post('/create', createCube);
router.get('/:cubeId', cubeDetails);

module.exports = router;