// Task 1

let arr = [1, 10, 20, 25, 60, 7,5, 0];
let multiples = arr.every((a) => ( a % 10 == 0));

console.log("Array : ", arr);
console.log("is Every Multiple of 10 ? ", multiples);

// Task 2

let min = arr.reduce((res, el) => (Math.min(res, el)));
console.log("Minimum : ", arr.reduce((res, el) => (Math.min(res, el))));