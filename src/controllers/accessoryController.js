const { render } = require('express/lib/response');
const accessoryService = require('../services/accessoryService');

const router = require('express').Router();

router.get('/create', (req, res) =>{
    res.render('accessory/create');
});

router.post('/create', async(req, res)=>{
    let {name, description, imageUrl} = req.body;

    await accessoryService.create(name, description, imageUrl);

    res.redirect('/');
});

module.exports = router;
