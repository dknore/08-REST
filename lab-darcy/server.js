"use strict";

const url = require('url');
const querystring = require('querystring');
// const simpleAPI = require('./api/simple');
// const CarsAPI = require('./api/Cars');

const http = require('http');
const SUV = require('./model/suv.js');
const router = require('./lib/router.js');
const storage = require('./lib/storage.js');
const PORT = process.env.PORT || 3000;
const router = new Router();


router.get('/api/cars', function(req, res) {
  if (req.url.query.id) {
    storage.fetchItem('cars', req.url.query.id) // 'SUV' vs 'cars'??
    .then( note => {
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });
      res.write(JSON.stringify(note));
      res.end();
    })
    .catch( err => {
      console.error(err);
      res.writeHead(404, {
        'Content-Type': 'text/plain'
      });
      res.write('not found');
      res.end();
    });

    return;
  };

  res.writeHead(400, {
    'Content-Type': 'text/plain'
  });
  res.write('bad request');
  res.end();
});

router.post('/api/cars', function(req, res) {
  try {
    var note = new Note(req.body.name, req.body.content);
    storage.createItem('cars', note);
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    res.write(JSON.stringify(note));
    res.end();
  } catch (err) {
    console.error(err);
    res.writeHead(400, {
      'Content-Type': 'text/plain'
    });
    res.write('bad request');
    res.end();
  };
});

const server = http.createServer(router.route());

server.listen(PORT, () => {
  console.log('Listening On: http://localhost:' + PORT);
});