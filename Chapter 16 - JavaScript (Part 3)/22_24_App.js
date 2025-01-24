// 22. Array Refferences

let a = [1];
let b = [1];

console.log("a : ", a);
console.log("b : ", b);
console.log("a == b : ", a == b);

// 23. Const Array

const arr = [1, 2, 3, 4];

console.log("Array : ", arr);
arr.push(29);
arr.push(30);

// arr = [1, 2, 3, 4]; // Throws Error

// 24. Nested Array

let nest = [[1, 2, 3], [1, 2], [5, 6, 7]]
console.log("Array : ", nest);
