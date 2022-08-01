const express = require('express');
const initHandlebars = require('./config/handlebars');
const cookieParser = require('cookie-parser');
const path  = require('path');
const authMiddleware = require('./middlewares/authMiddleware');
const routes = require('./routes');
const config = require('./config/config.json')[process.env.NODE_ENV];
const initDatabase = require('./config/database');


const app = express();

app.use(express.urlencoded({extended: true}));
initHandlebars(app);

app.use(express.static(path.resolve(__dirname, './public')));
app.use(cookieParser());

app.use(authMiddleware.auth);

app.use(routes);

initDatabase("mongodb://localhost:27017/cubes")
    .then(()=>{
        app.listen(5000, console.log.bind(console, 'Application is running on http://localhost:5000'));
    })
    .catch(err=> {
        console.log('Application init failed: ', err);
    })
