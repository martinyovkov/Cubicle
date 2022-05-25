const express = require('express');
const cubeService = require('../services/cubeServices');

const router = express.Router();
 
const renderHome = (req, res)=>{
    let cubes = cubeService.getAll();
    console.log(cubes);
    
    res.render('index', { cubes });
}

router.get('/', renderHome);

module.exports = router;