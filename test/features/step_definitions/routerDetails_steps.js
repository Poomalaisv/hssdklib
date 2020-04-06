import RouterDetailsApi from "../../../app/modules/routerDetailsApi";
import { Given, When, Then } from "cucumber";
import { expect } from "chai";

let household_url = "";
let authToken = "";
let apiResponse;

Given("The Household url {string} is available", function(url) {
	household_url = url;
});

Given("The Authorization token {string} is available", function(token) {
	authToken: token;
});

When("The Router details are fetched", function() {
	console.log("Hello **************");
	RouterDetailsApi.getRouters({
		household_url,
		authToken
	})
		.then(response => {
			console.log("Hi **************");
			// console.log(response);
			apiResponse = response;
		})
		.catch(err => {
			console.log("Hey **************");
			// apiResponse = err;
			console.log(err);
		});
});

Then("Router details are returned", function() {
	console.log("Voila **************");
	console.log(apiResponse);
});

// @binding()

// class RouterDetails {

//     @given ('The Household url {string} is available')
//     public (url: string) : void {
//         // Write code here that turns the phrase above into concrete actions
//         // return url;
//         console.log(url);
//     };
//     // Given('The Authorization token {string} is available', function (auth) {
//     //     // Write code here that turns the phrase above into concrete actions
//     //     return auth;
//     // });
//     // Given("The Household url {string} is available And The Authorization token {string} is available", function (url, auth) {
//     //     console.log(url)
//     //     return RouterDetailsApi.getRouters({
//     //         household_url: url,
//     //         authorization: auth
//     //     });
//     // })

//     // Then("Router details are returned", function () {
//     //     console.log("Returned");
//     // });
// }

// export = RouterDetails;

// import { By, until, Key } from 'selenium-webdriver'
// import { Given, When, Then } from 'cucumber'
// import chai from 'chai'

// var should = require('chai').should()

// Given("I navigate to the url {string}", function(url) {
//   return this.driver.get(url)
// })

// When('I do a search for {string}', function(searchText) {
//   const world = this

//   return world.driver.findElement(By.xpath('//input[@title="Search"]')).then(searchInput => {
//   	return world.driver.wait(until.elementIsVisible(searchInput)).then(() => {
//   	  return searchInput.sendKeys(searchText).then(() => {
//         return searchInput.sendKeys(Key.ENTER)
//   	  })
//   	})
//   })
// })

// Then('I should see the text {string}', function (text) {
//   const driver = this.driver
//   const xpath = '//*[contains(text(),"' + text + '")]'
//   return driver.wait(until.elementLocated(By.xpath(xpath))).then(el => {
//     return driver.wait(until.elementIsVisible(el))
//   })
// })
