'use strict';
const pool = require("../database/db");
const promisePool = pool.promise();

const getAllUsers = async (req) => {
  try {
    // TODO: do the LEFT (or INNER) JOIN to get owner's name as ownername (from wop_user table).
    const [rows] = await promisePool.query("SELECT * FROM wop_user");
    return rows;
  } catch (e) {
    res.status(500).send(e.message);
  }
};

const getUserById = async (req,userId) => {
  try {
    // TODO: do the LEFT (or INNER) JOIN to get owner's name as ownername (from wop_user table).
    const [rows] = await promisePool.query("SELECT * FROM wop_user WHERE user_id = ?",[userId]);
    return rows[0];
  } catch (e) {
    res.status(500).send(e.message);
  }
};

const deleteUser = async(req,userId) => {
  try{
    const [rows] = await promisePool.query("DELETE FROM wop_user WHERE user_id = ?",[userId]);
    console.log(rows);
    return rows[0];
  } catch(e){
    res.status(500).send(e.message);
  }
};

const addUser = async (res,req) =>{ 
  try{
    const [rows] = await promisePool.query("INSERT INTO wop_user(name,email,password) VALUE(?,?,?)",[req.body.name, req.body.email, req.body.passwd]);
    return rows[0];
  }catch(e){
    res.status(501).send(e.message);
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  deleteUser,
  addUser,
};
