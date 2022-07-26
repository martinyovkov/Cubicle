const express = require('express');
const authService = require('../services/authService');

const router = express.Router();

const renderLogin = (req, res)=>{
    res.render('loginPage');
}

const loginUser = async (req, res)=>{
   let result = await authService.login(req.body);
   
   if (!result) {
    return res.redirect('/404');
   }

    res.redirect('/');
};

router.get('/login', renderLogin);
router.post('/login', loginUser);

module.exports = router;