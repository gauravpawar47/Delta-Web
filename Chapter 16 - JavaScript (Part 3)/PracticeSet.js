// Task 1

let t1 = [7, 9, 0, -2];
let tn = 3;

console.log("Array : ", t1);
console.log("Array : ", t1.slice(0, 3));

// Task 2

console.log("Array : ", t1);
console.log("Array : ", t1.slice(-3));

// Task 3

let str = "";
if (str.length == 0 || str.charAt(0) == " ") {
  console.log("string is blank");
} else {
  console.log("string is not blank");
}

// Task 4

let name = "Gaurav";

if (name.charAt(2) == name.charAt(2).toLowerCase()) {
  console.log("Lower Case");
} else {
  console.log("Upper Case");
}

// Task 5

let s = "       aa vvv cc ";

console.log("Before : ", s);
console.log("After  : ", s.trim());

// Task 6

console.log("Index of 0 is : ", t1.indexOf(0));     