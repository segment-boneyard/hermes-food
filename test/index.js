
var hermesFood = require('..');
var assert = require('assert');
var Hermes = require('hermes');
var once = require('once');
var hermes;

describe('hermes-food', function(){
  beforeEach(function(){
    hermes = new Hermes().use(hermesFood());
  });

  it('should respond to food', function(done){
    hermes.say = once(say);
    hermes.hear('@hermes food!');

    function say(message){
      assert('@here FOOD! FOOD! FOOD! FOOD!');
      done();
    }
  });
});