// 1. Every

let arr1 = [1, 2, 3, 4];
let ans1 = arr1.every((a) => (a % 2 == 0));

console.log("Array 1 : ", arr1);
console.log("Answer  : ", ans1);

let arr2 = [2, 4];
let ans2 = arr2.every((a) => (a % 2 == 0));

console.log("Array 2 : ", arr2);
console.log("Answer  : ", ans2);

// 2. Some

let ans3 = arr1.some((a) => (a % 2 == 0));

console.log("Array 1 : ", arr1);
console.log("Answer  : ", ans3);

let ans4 = arr2.some((a) => (a % 2 == 0));

console.log("Array 2 : ", arr2);
console.log("Answer  : ", ans4);
