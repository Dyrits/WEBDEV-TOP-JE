function add(numberX, numberY) { return numberX + numberY; }

function subtract(numberX, numberY) { return numberX - numberY; }	

function sum (array) {
  return array.reduce((sum, currentValue) => { return sum + currentValue; }, 0)	
}

function multiply (array) {
  return array.reduce((sum, currentValue) => { return sum * currentValue; }, 1)	
}

function power(numberX, numberY) { return numberX ** numberY; }

function factorial(number) { return number ? number * factorial(number - 1) : 1; }

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}