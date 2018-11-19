var hello = require('../handler').hello

describe("Taco Gallery tests", function() {

  it('the hello function should work', function(done) {
    var event = {};
    var context = {};
    var callback = (ctx, data) => {
      console.log(data);
      done();
    }
    hello(event, context, callback)
  })
});