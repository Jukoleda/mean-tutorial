console.log('desde index.js');

const express = require('express');
const contectarDB = require('./config/db');
const cors = require('cors');

const app = express();

contectarDB();

app.use(cors());

app.use(express.json());

app.use('/api/productos', require('./routes/producto'));

app.listen(4000, () => {
    console.log('El servidor esta escuchando...')
});