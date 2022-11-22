'use strict';
// catRoute
const express = require('express');
const router = express.Router();
const multer = require('multer');
const catController = require('../controllers/catController');


const uploads = multer({dest: 'uploads/'});

router.get('/cat', catController.getCats)
    .get('/cat/:catId', catController.getCat)
    .post('/cat', uploads.single('cat') , catController.createCat)  
    .put('/cat',catController.modifyCat)
    .delete('/cat/:catId', catController.deleteCat);

module.exports = router;
