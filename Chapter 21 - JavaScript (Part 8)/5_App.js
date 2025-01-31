let arr = [1, 2, 3, 7, 6, 5];
let max = arr.reduce((a, el) => ( Math.max(a, el) ));

console.log("Array   : ", arr);
console.log("Maximum : ", max);