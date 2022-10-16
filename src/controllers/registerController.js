const express = require('express');
const {body, validationResult} = require('express-validator');
const authService = require('../services/authService');
const router = express.Router();

const renderRegister = (req,res)=>{
    res.render('registerPage');
}
const registerUser = async (req,res, next)=>{
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        //return res.status(400).json({errors:errors.array()[0].msg});
        next({message: errors.array()[0].msg});
    }

    try {
        await authService.register(req.body);
        res.redirect('/login');
    } catch (error) {
        res.status(401).render('registerPage', {error: error.message});
    }
}

router.get('/register', renderRegister);
router.post('/register', body('username').not().isEmail(), registerUser);
module.exports = router;