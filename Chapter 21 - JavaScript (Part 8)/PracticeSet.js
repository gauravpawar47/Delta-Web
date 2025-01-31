// Task 1

let arr = [1, 2, 3, 4, 5];
const avgOfSquares = (arr) =>
  arr.reduce((sum, el) => sum + el * el, 0) / arr.length;

console.log("Array Elements: ", arr);
console.log("Average of Squared Elements: ", avgOfSquares(arr));

// Task 2

let mapped = arr.map((el) => el + 5);
console.log("Mapped : ", mapped);

// Task 3

let strings = ["GAURAV", "CHINMAY", "pratik", "SuYash", "SomesH"];
let filterd = strings.filter((el) => el == el.toUpperCase());

console.log("String   : ", strings);
console.log("Filtered : ", filterd);

// Task 4

function doubleAndReturnArgs(arr, ...args) {
  return [...arr, args.map((el) => el * el)];
}

console.log("Original : ", arr);
console.log(
  "with 6 to 10 Squares : ",
  doubleAndReturnArgs(arr, 6, 7, 8, 9, 10)
);

// Task 5

function merge(obj1, obj2) {
  return { ...obj1, ...obj2 }; // Merging objects using the spread operator
}

const obj1 = {
  name: "GAURAV PAWAR",
  age: 20,
};

const obj2 = {
  roll: 67,
  branch: "COMPUTER",
};

console.log("Object 1: ", obj1);
console.log("Object 2: ", obj2);
console.log("Merged: ", merge(obj1, obj2));
