'use strict';

module.exports.lambdaStatus = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Lambda functions are available!\n',
      input: event,
    }),
  };

  callback(null, response);
};

module.exports.status = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: "kotoka-webapp-api is up!\n",
  };

  callback(null, response);
};

module.exports.echo = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
        "Content-Type": "text/html",
        "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
      },
    body: event.body,
  };

  callback(null, response);
};
