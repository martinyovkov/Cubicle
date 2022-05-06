

const intHandlebars = (app) =>{
    app.set('views', path.resolve('./src/views'))
app.engine('hbs', engine({
    extname: 'hbs'
})); 
app.set('view engine', 'hbs');
}