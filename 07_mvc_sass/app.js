const express = require('express')
const exphbs = require('express-handlebars')

const app = express();
const port = 5000;
app.use(express.urlencoded({
    extended: true
}))

app.use(express.json());
app.use(express.static('public'))

const handlebars = exphbs.create({
    extname: 'hbs'
})
app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');

const routes = require('./server/routes/user');

app.use('/', routes);


app.listen(port, () => console.log(`Listening on port ${port}`));


// Escrevemos a add-user e user-form, próximo passo será a criação da rota "router.get('/adduser', userController.form);"

