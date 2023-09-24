const express = require('express');
const router = express.Router();
const albumsController = require('../controllers/albumController');


router.get('/albums', albumsController.getAlbumsByNombre)

module.exports = router