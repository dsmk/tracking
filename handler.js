'use strict';

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({ done: true, stuff: "hi" })
  };

  callback(null, response);
};
