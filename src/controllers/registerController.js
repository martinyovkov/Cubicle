const express = require('express');

const router = express.Router();

const renderRegister = (req,res)=>{
    res.render('registerPage');
}
const registerUser = (req,res)=>{
    let {username, pass, repass} = req.body;
    if (pass == repass) {
        console.log('succesfully');
    }

    res.redirect('/');
}

router.get('/register', renderRegister);
router.post('/register', registerUser);
module.exports = router;