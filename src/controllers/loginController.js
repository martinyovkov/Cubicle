const express = require('express');
const authService = require('../services/authService');

const router = express.Router();

const renderLogin = (req, res)=>{
    res.render('loginPage');
}

const loginUser = async (req, res)=>{
   let token = await authService.login(req.body);
   
   if (!token) {
    return res.redirect('/404');
   }
    console.log(token);
    res.cookie('session', token);
    res.redirect('/');
};

router.get('/login', renderLogin);
router.post('/login', loginUser);

module.exports = router;