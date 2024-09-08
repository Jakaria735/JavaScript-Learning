// How to create and object
// how to print the value of an object
// adding a constructor

function Student(name, age, cgpa, lang) {
  this.name = name;
  this.age = age;
  this.cgpa = cgpa;
  this.lang = lang;

  this.display = function () {
    console.log(this.name);
    console.log(this.age);
    console.log(this.cgpa);
    console.log(this.lang);
  }

}

var student1 = new Student('Rafiq', 35, 4.25, ['Bengali', 'English', 'Hindi']);
var student2 = new Student('Rahim', 25, 4.25, ['Bengali', 'English', 'Hindi']);
var student3 = new Student('Rakib', 40, 4.25, ['Bengali', 'English', 'Hindi']);

student1.display();
student2.display();
student3.display();

