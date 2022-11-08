'use strict';
// catRoute
const express = require('express');
const router = express.Router();
const multer = require('multer');
const catController = require('../controllers/catController');


const uploads = multer({dest: 'uploads/'});

router.get('/cat', catController.getCats);
router.get('/cat/:catId', catController.getCat);
router.post('/cat', uploads.single('cat') , catController.createCat);  
router.put('/cat',catController.modifyCat);
router.delete('/cat/:catId', catController.deleteCat);

module.exports = router;