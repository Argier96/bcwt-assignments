'use strict';

const userModel = require('../models/userModel');
const { use } = require('../routes/catRoute');



const getUsers = async (req,res) =>{
    const users = await userModel.getAllUsers();
    
    users.map(user => {
        //remove password property for user items
        delete user.password;
        return user
    });
    res.json(users);
};

const getUser =async (req,res) =>{
    const userById = await userModel.getUserById(res, req.params.userId);
    if(userById){
        delete userById.password;
        res.json(userById);
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
const deleteUser = async (req,res) =>{
    const deleteUserByID = await userModel.deleteUser(res, req.params.userId);
    if(!deleteUserByID){
        console.log("Delete user sucessfull.")
        res.json(deleteUserByID);
    }else{
        console.log("Delete user not sucessfull.")
        res.sendStatus(404);
    }
};

module.exports = {
    getUsers,
    getUser,
    modifyUser,
    createUser,
    deleteUser,
};