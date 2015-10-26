var expect = require('chai').expect;
var greet = require('./greet.js')

describe('Pass string to sayThyName',function(){
	it('should return a greeting', function(done){
		expect(greet.sayThyName('Josh')).to.be.a("string");
		done();
	});
});
