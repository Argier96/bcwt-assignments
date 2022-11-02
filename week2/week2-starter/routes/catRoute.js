'use strict';
// catRoute
const express = require('express');
const router = express.Router();
const catController = require('../controllers/catController');


router.get('/cat', catController.getCats);
  router.get('/cat/:catId', catController.getCat);
  router.post('/cat', (req, res) => {
    res.send('From this endpoint you can add more cats.')
  })
  
  router.put('/cat', (req, res) => {
    res.send('From this endpoint you can update cats.')
  })
  
  router.delete('/cat', (req, res) => {
    res.send('From this endpoint you can delete cats.')
  })

  module.exports = router;