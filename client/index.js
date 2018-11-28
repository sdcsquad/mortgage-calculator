// const path  = require('path')
// import express from 'express';
// const db = require('./../database/dbMethods.js');

// const Template = require('./src/templates/html');
// const App = require('./src/templates/app')
// const Scripts = require('./src/templates/scripts')

// const Component = require('./src/server.jsx')
// const serverRender = require('./serverRender').default;

// const server = express();

// server.get('/api/mortgageCalculator/:id', (req, res) => {
//   let { id } = req.params;
//   db.retrieve(id, (err, data) => {
//     if (err) {
//       res.end(err);
//     } else {
//       res.writeHead(200, { 'Content-Type': 'application/json' });
//       res.end(JSON.stringify(data));
//     }
//   });
// });

// server.use('/homes', express.static(path.join(__dirname, '/../public/dist')));

// server.get('/', (req, res) => {
//   const id = 13;
//   serverRender(id)
//     .then(content => {
//       console.log(content);
//       res.send(content);
//     })
//     .catch(console.error);
// });



// server.listen(8080)



var nr = require('newrelic');
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;
const db = require('./../database/dbMethods.js');

const path = require('path')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/homes/:id', express.static(path.join(__dirname,'../public/dist')));


app.listen(port, () => {
  console.log(`listening at ${port}`);
});

app.get('/api/mortgageCalculator/:id', (req, res) => {
  let { id } = req.params;
  db.retrieve(id, (err, data) => {
    if (err) {
      res.end(err);
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(data));
    }
  });
});

app.post('/api/mortgageCalculator/:id', (req, res) => {
  const { id } = req.params;
  db.add(id, (err, data) => {
    if (err) {
      res.end(err);
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(data));
    }
  });
});

app.put('/api/mortgageCalculator/:id', (req, res) => {
  const { id } = req.params;
  db.update(id, (err, data) => {
    if (err) {
      res.end(err);
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(data));
    }
  });
});

app.delete('/api/mortgageCalculator/:id', (req, res) => {
  const { id } = req.params;
  db.deleteItem(id, (err, data) => {
    if (err) {
      res.end(err);
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(data));
    }
  });
});