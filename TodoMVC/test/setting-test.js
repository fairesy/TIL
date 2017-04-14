// var chai = require("chai");
chai.should();

describe("BDD로-", function(){
	it("테스트가 아무거나 돌아간다", function(){
		//given
		var testText = "test";
		//when
		//then
		Setting.test().should.be.equals(testText);
	});
});