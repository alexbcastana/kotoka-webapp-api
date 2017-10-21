/*
** This is the berries handler. It handles requests to to '/berries',
** and performs operations on Berries.
**
** HTTP and FaaS related semantics should be handled here.
**
** This handler injects depencies required for its functionality.
** Ex. dynamoDb
*/

'use strict';

const AWS = require('aws-sdk');
const uuid = require('uuid');
const BerryDAO = require('./dao/BerryDAO.js');
const dynamoDb = require('serverless-dynamodb-client');
var berryDAO = new BerryDAO(dynamoDb.doc);

module.exports.create = (event, context, callback) => {
  const body = JSON.parse(event.body);
  var berry = {};
  berry.notes = body.notes;
  berryDAO.save(berry, (error, result) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Couldn\'t create the berry. Database error.',
      });
    }
    else {
      // create a response
      const response = {
        statusCode: 200,
        body: JSON.stringify(result.Item),
      };
      callback(null, response);
    }
  });
}



module.exports.list = (event, context, callback) => {
  berryDAO.list((error, result) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Couldn\'t fetch the berries.',
      });
    }
    else {
      // create a response
      const response = {
        statusCode: 200,
        headers: {
            "Content-Type": "application/javascript",
            "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
            "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
        },
        body: JSON.stringify(result.Items),
      };
      callback(null, response);
    }
  });
};
