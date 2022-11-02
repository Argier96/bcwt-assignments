'use strict';

const userModel = require('../models/userModel');
const { use } = require('../routes/catRoute');

const users = userModel.users;

const getUsers = (req,res) =>{
    users.map(user => {
        //remove password property for user items
        delete user.password;
        return user
    });
    res.json(users);
};

const getUser = (req,res) =>{
    const user = users.filter(user => {
        delete user.password;
        return req.params.userId == user.id;
    })[0];

    if(user){
        res.json(user);
    }else {
        res.sendStatus(404);
    }
};
const modifyUser = (req,res) =>{
    res.send('From this point you can edit users.');

};
const createUser = (req,res) =>{
    console.log(req.body)
    const message = `Username: ${req.body.name} email : ${req.body.email}`;
    res.send(message);
};
const deleteUser = (req,res) =>{
    res.send('From this point you can delete users.');

};

module.exports = {
    getUsers,
    getUser,
    modifyUser,
    createUser,
    deleteUser,
};