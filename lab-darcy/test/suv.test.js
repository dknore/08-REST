"use strict";

const SUV = require('../models/SUV');

describe("SUV Model", () => {
  test("It should have a unique id", () => {
    let bmw = new BoardGame("BMW", "X7", "Black");
    
    // expect(bmw.id.length).toEqual(??);

    expect(bmw.make).toEqual("BMW");
    expect(bmw.model).toEqual("X7");
    expect(bmw.color).toEqual("black");
  });
});