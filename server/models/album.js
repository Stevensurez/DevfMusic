const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema( {
    nombre: String,
    artista: String,
    descripcion: String,
    imagen_url: String
})

module.exports = mongoose.model('album', albumSchema)