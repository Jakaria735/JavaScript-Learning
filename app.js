// Relational operator ->, >, >=, <, <=,==, ===, !=, !==

// logical operator ->, &&, ||, !

// jodi 2ta conditon true hoy tahole && operator
// jodi 2ta condition er majhe 1ta true hoy tahole || operator hobe//

// Statement Control//

var writtten = parseFloat(prompt('Enter your writtten number: '));
var mcq = parseFloat(prompt('Enter your mcq number: '));

var bangla = writtten + mcq;
document.write('Bangla : ' + bangla + '</br>');

// result grade //
if (bangla > 100 || bangla < 0) console.log('Invalid marks');
else if (bangla >= 80 && bangla <= 100) document.write('A+');
else if (bangla >= 70 && bangla <= 79) document.write('A');
else if (bangla >= 60 && bangla <= 69) document.write('A-');
else if (bangla >= 50 && bangla <= 59) document.write('B');
else if (bangla >= 40 && bangla <= 49) document.write('C');
else if (bangla >= 33 && bangla <= 39) document.write('D');
else document.write('fail');

// marks counting//

// temparture counting

var fahrenheit = parseFloat(prompt('Enter your Farenheit'));
var celsius = parseFloat(prompt('Enter your Celsius'));
var farn = (fahrenheit - 32) * (5 / 9);
var cel = celsius * (9 / 5) + 32;

document.write('Farenheit:' + farn + '^F' + '<br>');
document.write('Celsius:' + cel + '^C' + '<br>');

// Sum,Sub,multi,divided
var first = parseFloat(prompt('Enter your First Number: '));
var second = parseFloat(prompt('Enter your second Number: '));

var sum = first + second;
var sub = first - second;
var multi = first * second;
var divi = first / second;

document.write('First number is: ' + first + ';' + '</br>');
document.write('Second number is: ' + second + ';' + '</br></br>');
document.write('Sum : ' + sum + '</br></br>');
document.write('Subtraction : ' + sub + '</br></br>');
document.write('Multiplication : ' + multi + '</br></br>');
document.write('Divided : ' + divi + '</br>');
