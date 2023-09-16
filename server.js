const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('public'));

const budget = [
    { 
        title :'Eat out',
        budget:25
     },
     {
        title:'Rent',
        budget:150
     },
     {
        title:'Grocery',
        budget:75
     },
     { 
        title :'Medical and Healthcare',
        budget:35
     },
     {
        title:'Transportation',
        budget:45
     },
     {
        title:'Utilities',
        budget:25
     },
     { 
        title :'Insurance',
        budget:25
     },
     {
        title:'Childcare',
        budget:75
     },
     {
        title:'Clothing',
        budget:25
     },
  ];

app.get('/hello',(req, res)  => {
    res.send('Hello World!');
});

app.get('/budget',(req, res)  => {
    res.json(budget);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)

});