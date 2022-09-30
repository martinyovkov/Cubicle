const express = require('express');
const {body, validationResult} = require('express-validator');
const authService = require('../services/authService');
const router = express.Router();

const renderRegister = (req,res)=>{
    res.render('registerPage');
}
const registerUser = async (req,res)=>{
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({errors:errors.array() });
    }

   let createdUser = await authService.register(req.body);

   if (createdUser) {
    res.redirect('/login');
   }else {
    res.redirect('404');
   }
   
    
}

router.get('/register', renderRegister);
router.post('/register', body('username').not().isEmail() ,registerUser);
module.exports = router;