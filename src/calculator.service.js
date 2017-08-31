/*
 * Sample Calculator Service
 */

 function add(a, b) {
 	return a + b;
 }

 function subtract(a, b) {
 	return a - b;
 }

 function multiply(a, b) {
 	return a * b;
 }

 function divide(a, b) {
	if (b === 0) {
		throw Error('You cannot divide by zero')
	}
 
 	return a/b;
 }

 module.exports = {add, subtract, multiply, divide};