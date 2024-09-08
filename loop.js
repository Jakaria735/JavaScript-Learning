// Loop formula//
/*For loop*/
// for(variable,condition,update)

// for (var x = 1; x <= 100; x = x + 1) {
//   document.write(' ' + x);
// }
/*
for (var x = 1; x <= 20; x++) {
  var num1 = parseInt(prompt("Enter your first number : "));
  var num2 = parseInt(prompt("Enter your Second number : "));
  var sum = num1 + num2;
  console.log("Result = " + sum);
}
*/
//while loop

// var i = 1; //variable dite hobe upore and condition dite hobe while er vitore//
// while (i <= 5) {
//   i = i + 1;//update part vitore dite hobe//
//   document.write(" " + i);
// }
//write a program that eill print sum of all the number are divisible by 3 and 5 //

var i = 2;
var sum = 0;
while (i <= 50) {
  
  if (i % 3 == 0 && i % 5 == 0) {
    document.write(" " + i +","+ "<br>");
    sum = sum + i;

  }
  i = i + 1;
}
document.write("Sum : " + sum);