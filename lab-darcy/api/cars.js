"use strict";

const storage = require('../lib/storage.js');
storage.seed();

function getCars(req, res) {
  let cars = storage.readAll(); 
  let response = cars;
  if ('id' in req.url.query) {
    let id = req.url.query.id;
    if (cars[id] === undefined) {
      throw "404 Car ID not found: " + id;
    }
    response = cars[id];
  }

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

function updateCar(req, res) {

}

function deleteCar(req, res) {

}

module.exports = {getCars, createCar, updateCar, deleteCar};