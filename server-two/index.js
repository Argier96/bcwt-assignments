'use strict';

const express = require('express');
const app = express();
const port = 3000;

/*
app.get('/', (req, res) => {
    res.send('Hello World!');
  });
*/ 

/*
app.get('/test', (req, res) => {
    res.send('TEST PAGE');
  });    
*/
app.use(express.static('public'));
app.set('view engine', 'pug');


app.get('/catinfo',(req,res) => {
    const cat = {
        name: "Frank the cat",
        birthdate: "2020-10-05",
        weight: 12,
      };
      res.json(cat);    
})

app.get('/',(req,res) =>{
  res.render('test', {
    title: "Page Using PUG"
  });
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
  
  