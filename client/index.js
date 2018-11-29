const cluster = require('cluster')

if(cluster.isMaster) {
  var cpuCount = require('os').cpus().length;
  for(var i = 0; i < cpuCount; i++) {
    cluster.fork();
  }
} else {

  require('newrelic');
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
    console.log('Worker %d running!', cluster.worker.id);
  });
  
  app.get('/api/mortgageCalculator/:id', (req, res) => {
    let { id } = req.params;
    if (id>0 && id<10000000){
      id = id
    } else {
      id = 1
    }
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
}
