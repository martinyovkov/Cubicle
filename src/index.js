const express = require('express');
const {engine} = require('express-handlebars');
const path = require('path');

const app = express();

app.set('views', path.resolve('./src/views'))
app.engine('hbs', engine({
    extname: 'hbs'
})); 
app.set('view engine', 'hbs');

app.all('/', (req, res) => {
    res.render('index');
});

app.listen(5000, console.log.bind(console, 'Application is running on http://localhost:5000'));