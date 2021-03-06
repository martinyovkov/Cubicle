const express = require('express');
const cubeService = require('../services/cubeServices');

const router = express.Router();
 
const renderHome =  async (req, res)=>{
    let cubes = await cubeService.getAll();

    res.render('index', { cubes }); 
}

const search = async (req, res)=>{
    console.log(req.query);

    let {search, from, to} = req.query;

    let cubes = await cubeService.search(search, from, to);

    console.log(cubes); 
    res.render('index', { cubes })
}

router.get('/', renderHome);
router.get('/search', search)

module.exports = router;