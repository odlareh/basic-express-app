const express = require('express');
const app = express();
require('./config');

app.get('/', (req, res) => {
    res.send('Hola hijos')
})

app.listen(process.env.PORT, () => {
    console.log('Escuchando en puerto: ' + process.env.PORT)
});