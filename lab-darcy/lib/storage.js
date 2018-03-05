'use strict';

const car = require('../model/car.js');

let cars = {}; // Array?

function seed() {
  cars = {};

  save(new Car('BMW', 'X7', 'Black'));
  save(new Car('Audi', 'Q7', 'Silver'));
  save(new Car('Porsche', 'Cayenne', 'Red'));

  // const bmw = new Car('BMW', 'X7', 'Black');
  // const audi = new Car('Audi', 'Q7', 'Silver');
  // const porsche = new Car('Porsche', 'Cayenne', 'Red');

  // Cars[bmw.id] = bmw;
  // Cars[audi.id] = audi;
  // Cars[porsche.id] = porsche;
}

function save (car) {
  cars[car.id] = car;
}

function totalCars() {
  let cars = readAll();
  return cars.length;
}

function create(make, model, color) {
  const cars = new CAR(make, model, color);
  Cars[cars.id] = cars;
  return cars;
}

function getOne(id) {
  if (!id in Cars) {
    throw 'Car does not exist. ID: ' + id;
  }
  return Cars[id];
}

function getAll() {
  return Object.values(Cars);
}

function del(id) {
  let cars = read(id);
  delete cars[id];
  return cars;
}

module.exports = {seed, save, create, totalCars, getOne, getAll, del};