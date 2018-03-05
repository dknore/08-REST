'use strict';

const storage = require('../lib/storage.js');
storage.seed();

function getAllCars(req, res) {
  let cars = storage.readAll(); 
  let response = cars;
  if ('id' in req.url.query) {
    let id = req.url.query.id;
    if (cars[id] === undefined) {
      throw '404 Car ID not found: ' + id;
    }
    response = cars[id];
  }

  // function deleteCar(req, res) {

  // }

res.writeHead(200, {
  'Content-Type': 'application/json'
})
res.write(JSON.stringify(response));
res.end();
}

function createCar(req, res) {
  let make = req.url.query.make;
  let model = req.url.query.model;
  let color = req.url.query.color;

  let car = storage.createCar(make, model, color);
  return car;
}

module.exports = { getAllCars };



// function handleCars {
//   res.writeHead(200, {
//     'Content-Type': 'application/json'
//   })
//   const urlObj = url.parse(req.url);
//   //GET all books
//   if (req.method === 'GET' && urlObj.pathname === '/api/cars') {
//     res.write(JSON.stringify(books));
//     res.end();
//     //GET one book
//   } else if (req.method === 'GET' && urlObj.pathname === '/api/cars/?=id') {
//     res.write(JSON.stringify(books));
//     res.end();
//     //404 not found
//   } else {
//     res.writeHead(404, 'Not Found');
//     res.end();
//   };
// };