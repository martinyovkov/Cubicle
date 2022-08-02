const express = require('express');
const cubeService = require('../services/cubeServices');
const accessoryService = require('../services/accessoryService');
const { isAuth } = require('../middlewares/authMiddleware');
const { isOwner } = require('../middlewares/cubeMiddleware');

const router = express.Router();
 
const renderCreateCube = (req, res)=>{
    res.render('create');
}

const createCube = async (req, res)=>{
    let {name, description, imageUrl, difficultyLevel} = req.body;
    let creatorId = req.user._id; 

    try {
        await cubeService.create(name, description, imageUrl, creatorId, difficultyLevel);
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
    let accessories = await accessoryService.getAllUnused(cube.accessories.map(x=> x._id));
   
    
    res.render('accessory/attach', {...cube, accessories})

};
const attachAccessory = async(req,res) =>{
    const cubeId = req.params.cubeId;

    await cubeService.attachAccessory(req.params.cubeId, req.body.accessory);

    res.redirect(`/cube/${cubeId}`)
};

const renderEditCube = async (req, res) =>{
    let cube = await cubeService.getById(req.params.cubeId);
    if (isOwner){
        
        cube[`difficultyLevel${cube.difficulty}`] = true;
        if (!cube) {
            res.redirect('404');
            res.render('cube/edit', {...cube});
        }
    }else {
        res.redirect('/404');
    }

    
    
}

const editCube = async(req, res)=>{
    let modifiedCube = await cubeService.edit(req.params.cubeId, req.body);
    
 
    res.redirect(`/cube/${modifiedCube._id}`);
}

router.get('/create', isAuth ,renderCreateCube);
router.post('/create', isAuth, createCube);
router.get('/:cubeId', cubeDetails);
router.get('/:cubeId/attach-accessory', isAuth, renderAttachAccessoryPage);
router.post('/:cubeId/attach-accessory', isAuth, attachAccessory);
router.get('/:cubeId/edit',  renderEditCube);
router.post('/:cubeId/edit', editCube);

module.exports = router;