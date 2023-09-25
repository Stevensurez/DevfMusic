const { json } = require('express');
const album = require('../models/album');

//Elimina album por Id
exports.deleteAlbum = async(req, res) => {

    try {
        const albumOne = await album.findById(req.params.id) 
        let _id = albumOne._id;
        if(_id){
            await album.findByIdAndDelete(_id)
        }
        res.status(200).json({message: 'Album eliminado exitosamente'})
        
    } catch (error) {
        res.status(500).json({error: 'Album no encontrado'})
    }
}

// Busca album por Id
exports.getById = async(req, res) => {
    try {
        const albumOne = await album.findById(req.params.id)
        res.json(albumOne)

    } catch (err) {
        res.status(404).json({err: 'Albun no encontrado'})
    }
}

//Trae todos los albunes
exports.getAlbums = async(req, res) => {
    try {
        const albums = await album.find()
        res.json(albums)
    } catch (err) {
        res.status(500).json({err: 'Error al obtener los datos'})
    }
}

//Crea un album
exports.createAlbum = async(req, res) => {
    try {
        
        const {nombre, artista, descripcion, imagen_url} = req.body;

        const newAlbum = new album({
            nombre,
            artista,
            descripcion,
            imagen_url
        })
        const saveAlbum = await newAlbum.save()

        res.status(201).json(saveAlbum)

    } catch (err) {
        res.status(500).json({err:'Error al crear los albunes'})
        
    }
}

exports.updateAlbum = async(req, res) => {
    try {
        
        const {id} = req.params;
        await album.updateOne({_id: id}, {...req.body})
        const updateAlbum = await album.findById(id)
        return res.status(200).json(updateAlbum)

    } catch (err) {
        res.status(500).json({err:'No se pudo modificar el album'})
        
    }
}