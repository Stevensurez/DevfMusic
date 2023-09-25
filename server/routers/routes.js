const express = require('express');
const router = express.Router();
const albumsController = require('../controllers/albumController');


router.get('/', albumsController.getAlbums)
router.get('/:id', albumsController.getById)
router.post('/create', albumsController.createAlbum)
router.patch('/:id', albumsController.updateAlbum)
router.delete('/:id', albumsController.deleteAlbum)


module.exports = router