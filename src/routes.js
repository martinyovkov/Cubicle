const express = require('express');

const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeController');
const aboutController = require('./controllers/aboutController');
const accessoryController = require('./controllers/accessoryController');
const loginController = require('./controllers/loginController');
const registerController = require('./controllers/registerController');

const router = express.Router();


router.use(aboutController);
router.use(homeController);
router.use('/cube', cubeController);
router.use('/accessory', accessoryController);
router.use(loginController);
router.use(registerController);
router.use((req, res)=> {
    res.render('404');
});


module.exports = router;