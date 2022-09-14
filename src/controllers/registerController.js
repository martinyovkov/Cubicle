const express = require('express');
const authService = require('../services/authService');
const router = express.Router();

const renderRegister = (req,res)=>{
    res.render('registerPage');
}
const registerUser = async (req,res)=>{
   let createdUser = await authService.register(req.body);

   if (createdUser) {
    res.redirect('/login');
   }else {
    res.redirect('404');
   }
   
    
}

router.get('/register', renderRegister);
router.post('/register', registerUser);
module.exports = router;