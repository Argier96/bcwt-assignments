'use strict';

const express = require('express');
const app = express();
const port = 3000;

let counter = 0;
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
        birthdate: "2010-12-25",
        weight: 15,
      };
      res.json(cat);    
})

app.get('/test',(req,res) =>{
  res.render('test', {
    title: "myTitle",
    header1: "myHeader",
    header2: "header2",
    exampleText: "Page isrequested "+(counter++)+" times",
  });
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
  
  