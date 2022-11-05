'use strict;'

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

router.get('/user', userController.getUsers);
router.get('/user/:userId', userController.getUser);

router.post('/user', userController.createUser);

router.put('/user', userController.modifyUser );
router.delete('/user/:userId', userController.deleteUser );

module.exports = router;