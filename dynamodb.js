// inspired by the 
// https://github.com/serverless/examples/blob/master/aws-node-rest-api-with-dynamodb-and-offline/todos/dynamodb.js

'use strict';

const AWS = require('aws-sdk');

let options = {};

if (process.env.IS_OFFLINE) {
  options = {
    region: 'localhost',
    endpoint: 'http://localhost:8000',
  }
}

const client = new AWS.DynamoDB.DocumentClient(options);

module.exports = client;
