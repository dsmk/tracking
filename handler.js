'use strict';

const uuid = require('uuid');
const dynamodb = require('./dynamodb');

module.exports.category_create = (event, context, callback) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);

  if (typeof data.text !== 'string') {
    console.error('Validation Failed');
    callback(null, {
      statusCode: 400,
      headers: { 'Content-Type': 'text/plain'},
      body: 'Could not create the category',
    });
    return;
  }

  console.error(process.env.DYNAMODB_TABLE);
  
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      id: uuid.v1(),
      text: data.text,
      createdAt: timestamp,
      updatedAt: timestamp
    }
  };

  dynamodb.put(params, (error) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Could not create the category'
      });
      return;
    }

    // normal response
    const response = {
      statusCode: 200,
      body: JSON.stringify(params.Item),
    };
    callback(null, response);
  });
};

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({ done: true, stuff: "hi" })
  };

  callback(null, response);
};
