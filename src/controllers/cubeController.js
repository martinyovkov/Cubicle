const express = require('express');

const router = express.Router();
 
const renderCreateCube = (req, res)=>{
    res.render('create');
}

const createCube = (req, res)=>{
    console.log(req.body);

    res.redirect('/cube/create');
}

router.get('/create', renderCreateCube);
router.post('/create', createCube);

module.exports = router;