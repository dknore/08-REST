"use strict";

const uuidv4 = require('uuid/v4');

class SUV {
  constructor(make, model, color) {
    this.id = uuidv4();
    this.make = make;
    this.model = model;
    this.color = color;
  }
}

module.exports = SUV;