'use strict';

function bodyParser(req, callback) {
    let rec.body = '';

    req.on('data', (data) => {
      req.body += data.toString();
    });
  
    req.on('end', () => {
      try {
        req.body = JSON.parse(req.body);
        callback(null, req.body);
      } catch (err) {
        callback(err);
      };
    });
  
    req.on('error', (err) => {
      callback(err);
    });
  };

  module.exports = { bodyParser };