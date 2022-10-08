const express = require('express');
const {body, validationResult} = require('express-validator');
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

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).send(errors.array()[0].msg);
    }

    try {
        await cubeService.create(name, description, imageUrl, creatorId, difficultyLevel);
        res.redirect('/');

    } catch (error) {
        res.status(400).send(error.message).end();
    }
   
}

const cubeDetails = async (req, res) =>{
     let cube = await cubeService.getById(req.params.cubeId);
    
    const isOwner = cube.creatorId == req.user?._id;
    res.render('cube/details', {...cube, isOwner}) 
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
    if (cube.creatorId == req.user._id){

        cube[`difficultyLevel${cube.difficulty}`] = true;
        if (!cube) {
            res.redirect('404');
           
        }else res.render('cube/edit', {...cube});
    }else {
        res.redirect('/404');
    } 
    
}

const editCube = async(req, res)=>{
    let modifiedCube = await cubeService.edit(req.params.cubeId, req.body);
    
 
    res.redirect(`/cube/${modifiedCube._id}`);
}

const renderDeleteCube = async(req, res)=>{
    const cube =  await cubeService.getById(req.params.cubeId);
    if (cube.creatorId == req.user._id){
       res.render('cube/delete', {cube});
    }
    
}

const deleteCube = async(req, res)=>{
    const cube =  await cubeService.getById(req.params.cubeId);
    if (cube.creatorId == req.user._id){
        await cubeService.deleteCube(req.params.cubeId);
    }
    
    res.redirect('/');
}



router.get('/create', isAuth ,renderCreateCube);
router.post('/create',
 isAuth,
 body('name','Name is required!').not().isEmpty(),
 body('description', 'Description should be between 5 and 120 symbols!').isLength({min: 5, max:120}),
 body('difficulty', 'Difficulty is required to be in range 1 to 6!').toInt().isInt({min: 1, max: 6}), 
 body('name').custom(value=>{
    0
 }),
 createCube);
router.get('/:cubeId', cubeDetails);
router.get('/:cubeId/attach-accessory', isAuth, renderAttachAccessoryPage);
router.post('/:cubeId/attach-accessory', isAuth, attachAccessory);
router.get('/:cubeId/edit',  renderEditCube);
router.post('/:cubeId/edit', editCube);
router.get('/:cubeId/delete', isAuth, renderDeleteCube);
router.post('/:cubeId/delete',isAuth, deleteCube);


module.exports = router;