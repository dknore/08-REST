'use strict';

const http = require('http');
const url = require('url');
const querystring = require('querystring');
// const Car = require('./model/car.js');

const cars = require('./api/cars.js');

router = new Router();
router.get('/cars', cars.getAllCars);
router.post('/cars', cars.createCar);

const server = http.createServer((req, res) => {
  console.log("URL", req.url);
  // console.log("car data: ")
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log('Listening On: http://localhost:' + PORT));








// const Router = require('./lib/router.js');

// const querystring = require('querystring');

// const simpleAPI = require('./api/simple');
// const CarsAPI = require('./api/Cars');

// const Car = require('./model/Car.js');
// const storage = require('./lib/storage.js');
// const router = new Router();


// router.get('/api/Cars', function(req, res) {
//   if (req.url.query.id) {
//     storage.fetchItem('Cars', req.url.query.id) // 'Car' vs 'Cars'??
//     .then( note => {
//       res.writeHead(200, {
//         'Content-Type': 'application/json'
//       });
//       res.write(JSON.stringify(note));
//       res.end();
//     })
//     .catch( err => {
//       console.error(err);
//       res.writeHead(404, {
//         'Content-Type': 'text/plain'
//       });
//       res.write('not found');
//       res.end();
//     });

//     return;
//   };

//   res.writeHead(400, {
//     'Content-Type': 'text/plain'
//   });
//   res.write('bad request');
//   res.end();
// });

// router.post('/api/Cars', function(req, res) {
//   try {
//     var note = new Note(req.body.name, req.body.content);
//     storage.createItem('Cars', note);
//     res.writeHead(200, {
//       'Content-Type': 'application/json'
//     });
//     res.write(JSON.stringify(note));
//     res.end();
//   } catch (err) {
//     console.error(err);
//     res.writeHead(400, {
//       'Content-Type': 'text/plain'
//     });
//     res.write('bad request');
//     res.end();
//   };
// });

// const server = http.createServer(router.route());
// ==============