import { Given, Then, When } from "cucumber";
import { expect } from "chai";

let answer = 0;

Given("I start with {int}", function(input) {
	// Write code here that turns the phrase above into concrete actions
	answer = input;
});
When("I add {int}", function(input) {
	// Write code here that turns the phrase above into concrete actions
	answer = answer + input;
});
Then("I ended up with {int}", function(input) {
	expect(answer).to.equal(input);
});
