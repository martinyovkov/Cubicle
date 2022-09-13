const jwt = require('jsonwebtoken') 
const {promisify} = require('util');
const{ secret, sessionName} = require('../config/constants');

const jwtVerify = promisify(jwt.verify);

exports.auth= async (req,res, next) =>{
    let token = req.cookies[sessionName]
    
    if (token) {
        try {
            let decodedText = await jwtVerify(token, secret);

            req.user = decodedText;
            res.locals.user = decodedText; 

            console.log(req.user);

        } catch (error)  {
           return res.redirect('404');
        }
        
    }

    next();
}

exports.isAuth = (req, res, next)=>{
    if (!req.user) {
        res.redirect('/404');
    }
    next();
}