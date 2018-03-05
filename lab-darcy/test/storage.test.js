'use strict';

const storage = require('../lib/storage.js');

describe('Storage', () => {
  beforeEach(() => {
    storage.seed();
  })

  test('Should have a few Cars after populating', () => {
    expect(storage.size()).toEqual(3);
  });

  test('Should be able to create a new car', () => {
    let make = 'Lexus';
    let model = 'RX';
    let color = 'Charcoal';
    let car = storage.create(make, model, color);

    expect(car.make).toEqual(make);
    expect(car.model).toEqual(model);
    expect(car.color).toEqual(color);

    expect(storage.size()).toEqual(4);
  });

  test('Should be able to create a new car then get it', () => {
    let make = 'Land Rover';
    let model = 'Range Rover';
    let color = 'Orange';
    let car = storage.create(make, model, color);

    expect(car.make).toEqual(make);
    expect(car.model).toEqual(model);
    expect(car.color).toEqual(color);

    expect(storage.size()).toEqual(4);

    let readCar = storage.read(car.id);
    expect(readCar.make).toEqual(make);
    expect(readGame.model).toEqual(model);
    expect(readGame.color).toEqual(color);
  });

  test('Should be able to create a new car then update it', () => {
    let name = 'uno';
    let players = 4;
    let playtime = 60;
    let game = storage.create(name, players, playtime);

    expect(game.name).toEqual(name);
    expect(game.players).toEqual(players);
    expect(game.playtime).toEqual(playtime);

    expect(storage.size()).toEqual(4);

    let updatedGame = storage.update(game.id, 'UNO!', 6, 120);
    expect(updatedGame.name).toEqual('UNO!');
    expect(updatedGame.players).toEqual(6);
    expect(updatedGame.playtime).toEqual(120);
  });

  test('delete game', () => {
    let CarsBeforeDelete = storage.readAll();
    let originalSize = CarsBeforeDelete.length;
    let cars = CarsBeforeDelete[0];

    let isCarInCars = false
    CarsBeforeDelete.forEach(gg => {
      if (gg.id === cars.id) {
        isCarInCars = true;
      }
    });
    expect(isCarInCars).toEqual(true);

    storage.del(car.id);

    let CarsAfterDelete = storage.readAll();
    let newSize = CarsAfterDelete.length;

    expect(newSize).toEqual(originalSize - 1);
    CarsAfterDelete.forEach(gg => {
      expect(gg.id).not.toEqual(car.id);
    });
  });
});