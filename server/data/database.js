const mongoose = require('mongoose');

const mongoConnect = async () => {
    try{
        await mongoose.connect(
            'mongodb+srv://stevensurez:St3v3n.2023@protalento-back.zv7nrws.mongodb.net/RepMusic?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
            })
        console.log('Se realizo correctamente la conexión con Mongo DB')
    }
    catch(err){
        console.log('Error en la conexion a la database',err)
        
    }
}

module.exports = mongoConnect