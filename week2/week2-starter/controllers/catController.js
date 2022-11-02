'use strict';
// catController

const catModel= require ('../models/catModel');
const getCats = (req,res) => {
    res.json(catModel.cats)
}
const getCat = (req, res) => {
   // res.send('From this endpoint you can get cats info with id: '+ req.params.catId);
   
   //choose only one object with matching id
   const cat = catModel.cats.filter (cat => {
        return req.params.catId == cat.id;
   })[0];

   if (cat){
    res.json(cat);
   }else {
        res.sendStatus(404);
   }

    
};
const modifyCat = (req, res) => {};
const createCat  = (req, res)=> {};
const deleteCat = (req, res) => {};

module.exports = {
    getCat,
    getCats,
    modifyCat,
    createCat,
    deleteCat,
};