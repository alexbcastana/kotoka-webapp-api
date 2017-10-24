/*
** This is the Berry Data Access Object, which provides access to the Berries
** table.
**
** This controls access to the Berries table, based on business rules.
** Ex. A new Berry could be rejected because it is missing a required property.
** This class can pass error messages upstream in the callback, but HTTP
** semantics (HTTP Error Codes) should be handled in the berries.js handler.
*/

'use strict';

const AWS = require('aws-sdk');
const uuid = require('uuid');

class BerryDAO {
  constructor(db) {
    this.db = db;
  }

  save(berry, callback) {

    const timestamp = new Date().getTime();
    const params = {
      TableName: process.env.DYNAMODB_TABLE,
      Item: {
        id: uuid.v1(),
        notes: berry.notes,
        createdAt: timestamp,
        updatedAt: timestamp,
      },
    };

    // write the berry to the database
    this.db.put(params, callback);
  }

  list(callback) {
    const params = {
      TableName: process.env.DYNAMODB_TABLE,
    };

    // fetch all berries from the database
    this.db.scan(params, callback);
  }

  delete(id, callback) {

    const params = {
      TableName: process.env.DYNAMODB_TABLE,
      Key: {
        id: id,
      },
    };

    // delete the todo from the database
    this.db.delete(params, callback);
  }
}

module.exports = BerryDAO;
