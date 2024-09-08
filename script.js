// Relational Operator ->, >=, <, <= , ==, ===, !=, !==

// Logical Operator ->, &&, ||, !

//Temperature Counting
var fahrenheit = parseFloat(prompt('Enter your Fahrenheit: '));
var fahren = parseFloat(prompt('Enter your Celsius: '));
var celsius = (fahrenheit - 32) * (5 / 9);
var far = fahren * (9 / 5) + 32;

document.write('Celsius: ' + celsius + '^C' + '</br>');
document.write('Fahrenheit: ' + far + '^f');

//Area Calculator
var base = parseFloat(prompt('Enter your base: '));
var height = parseFloat(prompt('Enter your height: '));
var area = (base * height) / 2;
document.write('Area =' + area);

//Task 3

var num1 = prompt('Enter your first number: ');
var num2 = prompt('Enter your second number: ');

//2nd way to count all
var sum, sub, multi, divied, modu;

var sum = num1 + num2;
var sub = num1 - num2;
var multi = num1 * num2;
var divied = num1 / num2;
var modu = num1 % num2;
//print all
document.write(num1 + '+' + num2 + '=' + sum + '</br>');
document.write(num1 + '-' + num2 + '=' + sub + '</br>');
document.write(num1 + '*' + num2 + '=' + multi + '</br>');
document.write(num1 + '/' + num2 + '=' + divied + '</br>');
document.write(num1 + '%' + num2 + '=' + modu + '</br>');

// addition
var sum = num1 + num2;
document.write(' Addition : ' + sum + '</br>');
// Subtraction
var sub = num1 - num2;
document.write(' Subtraction : ' + sub + '</br>');
//Multiplication
var multi = num1 * num2;
document.write(' Multipication : ' + multi + '</br>');
//Divided
var divied = num1 / num2;
document.write(' Divided : ' + divied + '</br>');
//Modulus
var modu = num1 % num2;
document.write(' Modulus : ' + modu);
//Ending Task 3//

/*
//JavaScript Output Function//

document.write("Name: Jack <br>");
document.write("Phone: 008251525 <br>");
document.write("email: jakariahome.user@gmail.com <br>");
document.write("address: netrakona <br>");

// Uppercase//

var text = "Bangladesh";
var text1 = " is a beautiful country!!<br><br>";
uper = text.toLowerCase();
document.write(uper .concat(text1));
//Text Length------//
 // convert system//
 var len = text.length;
document.write("Number of caracter " + len);
direct system 
document.write("Number of carcater " + text.length);
slice
document.write(text.slice(2,5));
var firstName = prompt("Enter your First name");
var lastName = prompt("Enter your Last name");
//var user = firstName + lastName;
//var user = firstName.concat(lastName);
document.write(user.toUpperCase());
//document.write(user.slice(2))
//document.write(firstName .concat(lastName));
document.write(" User input caracter " + user.length);
*/
