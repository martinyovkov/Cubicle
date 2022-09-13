const express = require('express');
const authService = require('../services/authService');
const {sessionName} = require('../config/constants');

const router = express.Router();

router.get('/logout', (req,res)=>{
    res.clearCookie(sessionName);
    res.redirect('/')
});

module.exports = router;