// ./models/catModel.js
"use strict";
const pool = require("../database/db");
const promisePool = pool.promise();

const getAllCats = async (req,res) => {
  try {
    // TODO: do the LEFT (or INNER) JOIN to get owner's name as ownername (from wop_user table).
    const [rows] = await promisePool.query("SELECT * FROM wop_cat");
    return rows;
  } catch (e) {
    res.status(500).send(e.message);
  }
};

const getCatById = async (req,catId) => {
  try {
    // TODO: do the LEFT (or INNER) JOIN to get owner's name as ownername (from wop_user table).
    const [rows] = await promisePool.query("SELECT * FROM wop_cat WHERE cat_id = ?",[catId]);
    return rows[0];
  } catch (e) {
    res.status(500).send(e.message);
  }
};
const deleteCat = async(req,catId) => {
  try{
    const [rows] = await promisePool.query("DELETE FROM wop_cat WHERE cat_id = ?",[catId]);
    return rows[0];
  } catch(e){
    res.status(500).send(e.message);
  }
};

const addCat = async (res,req) =>{
  try{
    const [rows] = await promisePool.query("INSERT INTO wop_cat(name,weight,owner,filename,birthdate) VALUE (?,?,?,?,?)",[req.body.name, req.body.weight, req.body.owner, req.file.path, req.body.birthdate]);
    return rows[0];
  }catch(e){
    res.status(501).send(e.message);
  }
}


module.exports = {
  getAllCats,
  getCatById,
  deleteCat,
  addCat,
};
