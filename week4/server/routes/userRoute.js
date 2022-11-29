'use strict;'

const express = require('express');
const router = express.Router();
const { body } = require("express-validator");
const userController = require('../controllers/userController');

router.get('/user', userController.getUsers)
    .get('/user/:userId', userController.getUser)
    .get('/token', userController.checkToken)
    .post('/user',
        body("name").isLength({ min: 3 }).trim().escape(),
        body("email").isEmail().normalizeEmail(),
        body("passwd").isLength({ min: 8 }).trim(),
        userController.createUser)
    .put('/user', userController.modifyUser )
    .delete('/user/:userId', userController.deleteUser )

module.exports = router;