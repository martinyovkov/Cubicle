const express = require('express');
const cubeService = require('../services/cubeServices');
const accessoryService = require('../services/accessoryService');

const router = express.Router();
 
const renderCreateCube = (req, res)=>{
    res.render('create');
}

const createCube = async (req, res)=>{
    let {name, description, imageUrl, difficultyLevel} = req.body;

    try {
        await cubeService.create(name, description, imageUrl, difficultyLevel);
        res.redirect('/');

    } catch (error) {
        res.status(400).send(error.message).end();
    }
   
}

const cubeDetails = async (req, res) =>{
     let cube = await cubeService.getById(req.params.cubeId);

    res.render('cube/details', {...cube}) 
}

const renderAttachAccessoryPage = async(req, res) =>{
    let cube = await cubeService.getById(req.params.cubeId);
    let accessories = await accessoryService.getAll();

    res.render('accessory/attach', {...cube, accessories})

};
const attachAccessory = async(req,res) =>{
    const cubeId = req.params.cubeId;

    await cubeService.attachAccessory(req.params.cubeId, req.body.accessory);

    res.redirect(`/cube/${cubeId}`)
};

router.get('/create', renderCreateCube);
router.post('/create', createCube);
router.get('/:cubeId', cubeDetails);
router.get('/:cubeId/attach-accessory', renderAttachAccessoryPage);
router.post('/:cubeId/attach-accessory', attachAccessory);

module.exports = router;