const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
require('./config');

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// Enable public folder
app.use(express.static(path.resolve(__dirname, '../public')));

// Routes
app.get('/', (req, res) => {
    res.send('Hola a tod@s!')
})

// Port to listen
app.listen(process.env.PORT, () => {
    console.log('Escuchando en puerto: ' + process.env.PORT)
});