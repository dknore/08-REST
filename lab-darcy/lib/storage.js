"use strict";

const SUV = require('../models/suv.js');

// one object to store all Cars
let Cars = {};

// pre-populate the storage with a few known Cars.
function seed() {
  // reset all previous Cars
  Cars = {};

  // create and add new already-known Cars.
  const bmw = new SUV("BMW", "X7", "Black");
  const audi = new SUV("Audi", "Q7", "Silver");
  const porsche = new SUV("Porsche", "Cayenne", "Red");

  Cars[bmw.id] = bmw;
  Cars[audi.id] = audi;
  Cars[porsche.id] = porsche;
}

function size() {
  let Cars = readAll();
  return Cars.length;
}

function create(make, model, color) {

  const cars = new SUV(make, model, color);
  Cars[cars.id] = cars;
  return cars;
}

function readAll() {
  return Object.values(Cars);
}

function read(id) {
  if (!id in Cars) {
    throw "Car does not exist. ID: " + id;
  }
  return Cars[id];
}

function update(id, make, model, color) {
  let cars = read(id);
  cars.make = make;
  cars.model = model;
  cars.color = color;
  return cars;
}

function del(id) {
  // read the car to make sure it exists
  let cars = read(id);
  delete cars[id];
  return cars;
}

module.exports = {
  seed, size,
  create, readAll, read, update, del,
};