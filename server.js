const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    res.render('home', {
        nombre: 'rOSa iSeLa'
    });
});

app.get('/about', function(req, res) {
    res.render('about');
});
/*app.get('/', function(req, res) {
    let salida = {
        nombre: 'Rosa Isela',
        url: req.url
    }

    //res.send('Hola Mundo');
    res.send(salida);
})*/

/*
app.get('/data', function(req, res) {
    res.send('Escucando peticiones en el puerto 3000');
})
*/

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});
//app.listen(3000);