const express = require('express');
const initHandlebars = require('./config/handlebars');
const path  = require('path');
const app = express();


initHandlebars(app);

app.use(express.static(path.resolve(__dirname, './public')));

app.all('/', (req, res) => {
    res.render('index');
});

app.listen(5000, console.log.bind(console, 'Application is running on http://localhost:5000'));