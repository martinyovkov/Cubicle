const express = require('express');
const cookieParser = require('cookie-parser');
const authService = require('../services/authService');

const router = express.Router();

router.use(cookieParser());

const renderLogin = (req, res)=>{
    res.render('loginPage');
}

const loginUser = async (req, res)=>{
   let token = await authService.login(req.body);
   
   if (!token) {
    return res.redirect('/404');
   }
    console.log(token);
    res.cookie('user', token);
    res.redirect('/');
};

router.get('/login', renderLogin);
router.post('/login', loginUser);

module.exports = router;