const express = require('express');
const app = express();

const connectDataBase = require('./server/data/database');
const albumRoutes = require('./server/routers/routes');

//Conexion a la base de datos mongoDB
connectDataBase();

//Middleware para manejar el JSON
app.use(express.json())

app.use('/', albumRoutes)


const PORT = 3000;

app.listen(PORT, () => {
    console.log('Servidor escuchando por el puerto:', PORT)
})

