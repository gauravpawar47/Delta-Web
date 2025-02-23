// 5. Factory Functions

// function factoryFunciton(name, age) {
//   const person = {
//     name: name,
//     age: age,
//     talk() {
//       console.log(`Hi, My Name is ${name}`);
//     },
//   };

//   return person;
// }

// let p1 = factoryFunciton("Gaurav", 20);
// let p2 = factoryFunciton("Pratik", 21);

// console.log(p1);
// console.log(p2);

// 6. New Operator

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.talk = function () {
//   console.log(`Hello ${this.name}`);
// };

// let p3 = new Person("Gaurav", 20);
// let p4 = new Person("Aditya", 18);

// console.log(p3);
// console.log(p4);
// p3.talk();
// p4.talk();

// 7. Classes in Java

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   talk() {
//     console.log(`Hello ${this.name}`);
//   }
// }

// let p1 = new Person("Gaurav", 20);
// p1.talk();

// 8. Inheritance

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`Hello ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, age, marks) {
    super(name, age);
    this.marks = marks;
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
}


let s1 = new Student("Gaurav", 20, 9.71);
let t1 = new Student("Supriya", 40, "Maths");

s1.talk();
t1.talk();