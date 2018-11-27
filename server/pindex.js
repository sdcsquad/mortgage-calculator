const React = require('react');
const { renderToString } = require('react-dom/server');
const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
const App = require('../client/src/index');

const port = 1000;
const db = require('./../database/dbMethods.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'pug');
app.use('/homes/:id', express.static());

app.get('/api/mortgageCalculator/:id', (req, res) => {
  let { id } = req.params;
  const html = renderToString(<App test={id} />);

  res.render(path.join(__dirname, 'public/dist/index.pug'), {
    app: html,
  });
});

app.listen(port, () => {
  console.log(`listening at ${port}`);
});
