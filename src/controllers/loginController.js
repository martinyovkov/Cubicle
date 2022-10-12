const express = require('express');
const authService = require('../services/authService');
const {sessionName} = require('../config/constants');

const router = express.Router();

const renderLogin = (req, res)=>{
    res.render('loginPage');
}

const loginUser = async (req, res)=>{

    try {
        let token = await authService.login(req.body);
        
        if (!token) {
            return res.redirect('/404');
            }
        res.cookie(sessionName, token, {httpOnly: true});
        res.redirect('/');
    } catch (error) {
        res.status(400).render('loginPage', {error: error.message})
    }
   
};

router.get('/login', renderLogin);
router.post('/login', loginUser);

module.exports = router;