// Large number find//

var num1 = parseFloat(prompt('Enter your first number'));
var num2 = parseFloat(prompt('Enter your 2nd number'));
var num3 = parseFloat(prompt('Enter your 3rd number'));

if (num1 > num2 && num1 > num3)
  console.log('Large number is: ' + num1);
else if (num2 > num1 && num2 > num3)
  console.log('Large number is: ' + num2);
else
  console.log('Large number is: ' + num3);
