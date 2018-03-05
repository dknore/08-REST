'use strict';

const request = require('superagent');
const SERVER_URL = 'http://localhost:3000';

describe('Cars API', () => {
  test('Get all Cars', (done) => {
    request.get(SERVER_URL + '/Cars')
    .end((err, res) => {
      expect(res.status).toBe(200);

      let Cars = res.body;
      expect(Cars.length).toBe(3);
      done();
    });
  });

  test('get one car', (done) => {
    request.get(SERVER_URL + '/Cars')
    .end((err, res) => {
      expect(res.status).toBe(200);

      let Cars = res.body;
      expect(Cars.length).toBe(3);

      let cars = Cars[0];
      request.get(SERVER_URL + `/Cars?id=${cars.id}`)
      .end((err, res) => {
        expect(res.status).toBe(200);
        let carResponse = res.body;
        expect(carResponse.make).toEqual(cars.make);
        expect(carsResponse.model).toEqual(cars.model);
        expect(carsResponse.color).toEqual(cars.color);
      });
    });
  });
})