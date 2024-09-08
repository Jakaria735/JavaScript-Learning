/*
// Addition
var num1 = parseInt(prompt("Enter your number")); 
var num2 = parseInt(prompt("Enter your number"));


function add(num1,num2) {
  var result = num1 + num2;
  document.write('Your Addition is : ' + result + '<br>');
}
add(num1, num2);

// Subtruction funciton
function sub(num1, num2) {
  var result = num1 - num2;
  document.write('Your Subtraction is : ' + result + '<br>');
}
sub(num1, num2);
//  multiplication function 
function mult(num1, num2) {
  var result = num1 * num2;
  document.write('Your Multiplication is : ' + result + '<br>');
}
mult(num1, num2);
//  Division function 
function divi(num1, num2) {
  var result = num1 / num2;
  document.write('Your Division is : ' + result + '<br>');
}
divi(num1, num2);
*/


// // Creating a function
// var x = parseInt(prompt("Enter your number: "));

// function hello(x) {
//   var result = x * x;
//   return result;
// }
// // Calling a fuction

// document.write("Result is : " + hello(x));

// IIFE (Immediately Invokeable Function Expressions)

// (function display(message){
//   console.log(message)
// }) ("Hello");

// Array class
/*
var name1, name2, name3, name4, name5;

name1 = "Anis";
name2 = "Halim";
name3 = "Karim";
name4 = "Lima";
name5 = "Anis";

var names = new Array(5);
names[0] = "Anis";
names[1] = "Halim";
names[2] = "Karim";
names[3] = "LIma";
names[4] = "Shipa";

console.log(names[2]);
*/
// push ar pop hocche method// push mane insert kora
// pop mane delete kora
/*
var names = ['Anisul', 'Lima', 'shipa', 'Rinku'];
// console.log(names.length);
names.push('Sokina');
names.push('Rahim');
names.push('Tara');
names.push('Tara');
console.log(names.length);

// pop mane Delete kora//
names.pop();
names.pop();
names.pop();
names.pop();
console.log(names.length);
*/

//
/*
var num = [10, 20, 30, 40, 50, 60];
var sum = 0;
 
for (var i = 0; i < 6; i++){
  console.log(num[i]);
  sum = sum + num[i];
}

console.log("Sum = " + sum);
*/
/*
var num = new Array();

for (var i = 0; i < 4; i++) { 
  num[i] = parseInt(prompt("Enter a number : "));
}
var sum = 0;

for (var i = 0; i < 4; i++) {
  console.log(num[i]);
  sum = sum + num[i];
}

console.log('Sum = ' + sum);
*/
// Array Method
// I learned about pop(),push(),concat()
// shift(),unshift(),splice(pos,noe,ele1,ele2....)
// sort(),reverse()


var names = ['Anisul', 'Lima', 'shipa', 'Rinku'];
console.log(names);

// // shift opposite of pop
// names.shift();
// console.log(names);

// // unshift opposite of push
// names.unshift("Sagor");
// console.log(names);
// splice diye value add kora jay avar remove kora jay
// splice(position,remove number)


// names.splice(2, 1, "Karim", "Jannat");
// console.log(names);

// slice method remove kore element
// var newArray = names.slice(1);
// console.log(newArray);

// var sortedNames = names.sort();
// names.reverse();
// console.log(sortedNames);

// var numebrs = [25, 5, 10, 15, 45, 35, 50];
// numebrs.sort(function (a, b) {
//   return a - b;
// });
// console.log(numebrs);


// 1D(Diamentional Array)

function higestScore(scores) {
  var max = scores[0];

  for (var x = 1; x < scores.length; x++)
    if (max < scores[x]) {
      max = scores[x];
    }
  return max;
}
var scores = [21, 28, 15, 35, 10, 65];
var maxScore = higestScore(scores);
console.log(maxScore);
