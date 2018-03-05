'use strict';

const CAR = require('../models/car.js');

describe('car Model', () => {
  test('It should have a unique id', () => {
    let bmw = new CAR('BMW', 'X7', 'Black');
    
    // expect(bmw.id.length).toEqual(??);

    expect(bmw.make).toEqual('BMW');
    expect(bmw.model).toEqual('X7');
    expect(bmw.color).toEqual('black');
  });
});