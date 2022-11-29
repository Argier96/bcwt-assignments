'use strict';

const userModel = require('../models/userModel');
const {validationResult} = require('express-validator');



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
const createUser=async (req,res)=>{
    const newUser=req.body;
    if (!newUser.role) {
        newUser.role=1
    }
    const errors=validationResult(req);
    
    if(errors.isEmpty()){
        const result=await userModel.addUser(newUser,res);
        res.status(201).json({message:'user created',userId:result})

    }else{
        res.status(400).json({message:'Failed to create user',errors:errors.array()})
    }
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

const checkToken = (req, res) => {
    res.json({user: req.user});
  };

module.exports = {
    getUsers,
    getUser,
    modifyUser,
    createUser,
    deleteUser,
    checkToken
};