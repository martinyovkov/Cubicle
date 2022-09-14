const express = require('express');
const cubeService = require('../services/cubeServices');

const router = express.Router();
 
const renderHome =  async (req, res)=>{
    let cubes = await cubeService.getAll();

    res.render('index', { cubes }); 
}

const search = async (req, res)=>{

    let {search, from, to} = req.query;

    let cubes = await cubeService.search(search, from, to);

    res.render('index', { cubes })
}

router.get('/', renderHome);
router.get('/search', search)

module.exports = router;