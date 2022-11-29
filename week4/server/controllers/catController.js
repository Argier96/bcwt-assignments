'use strict';
// catController
const catModel= require ('../models/catModel');
const {validationResult} = require('express-validator');

const getCats = async (req, res) => {
    const cats = await catModel.getAllCats(res);
    res.json(cats);
  };

const getCat = async (req, res) => {
   //choose only one object with matching id
   const cat = await catModel.getCatById(res, req.params.catId);
   if (cat){
    res.json(cat);
   }else {
        res.sendStatus(404);
   }

    
};
const modifyCat = async (req, res) => {
    const errors = validationResult(req);
    if(errors.isEmpty()){
        const catModify = await catModel.updateCat(res,req);
        if(!catModify){
            res.send("cat modified");
        }else {
            res.sendStatus(502);  
        }}else {
            console.log('validation errors', errors);
            res.status(400).json({message: 'cat update failed',
            errors: errors.array()});
    }
};

const createCat  = async(req, res)=> {
    const errors = validationResult(req);
    if (!req.file) {
        res.status(400).json({message: 'file missing or invalid'});
    }
    else if (errors.isEmpty() && req.file) {
        const cat = req.body;
        cat.filename = req.file.filename;
        console.log('creating a new cat:', cat);
        const catId = await catModel.addCat(cat, res);
        res.status(201).json({message: 'cat created', catId});
    } else {
        console.log('validation errors', errors);
        res.status(400).json({message: 'cat creation failed',
        errors: errors.array()});
    }
};
const deleteCat = async (req,res) =>{
    const deleteCatByID = await catModel.deleteCat(res, req.params.catId);
    if(!deleteCatByID){
        console.log("Deleting cat sucessfull.")
        res.json(deleteCatByID);
    }else{
        console.log("Deleting cat not sucessfull.")
        res.sendStatus(404);
    }
  };

module.exports = {
    getCat,
    getCats,
    modifyCat,
    createCat,
    deleteCat,
};