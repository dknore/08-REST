'use strict';

const uuidv4 = require('uuidv4');

class Car {
  constructor(make, model, color) {
    this.id = uuidv4();
    this.make = make;
    this.model = model;
    this.color = color;
  }
}

module.exports = Car;