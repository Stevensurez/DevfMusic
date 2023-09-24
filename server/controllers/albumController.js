const album = require('../models/album');

exports.getAlbumsByNombre = async(req, res) => {
    try {
        const albums = await album.find()
        const albumsByNombre = {}

        albums.forEach((album) => {

            if(!albumsByNombre[album.nombre]){
                albumsByNombre[album.nombre] = []
            }

            albumsByNombre[album.nombre].push(album)
        })

        res.json(albumsByNombre)
    } catch (err) {
        res.status(500).json({err: 'Error al obtener los datos'})
    }
}