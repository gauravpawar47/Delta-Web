//  17. Concat and Reverse

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

console.log("Value of Array 1 : ", arr1);
console.log("Value of Array 2 : ", arr2);

console.log("Concatination of Both : ", arr1.concat(arr2));
console.log("Reverse of Array 1 : ", arr1.reverse());
console.log("Reverse of Array 2 : ", arr2.reverse());

// 18. Slices

console.log("arr1.slice()     : ", arr1.slice());
console.log("arr1.slice(2)    : ", arr1.slice(2));
console.log("arr1.slice(1, 4) : ", arr1.slice(1, 4));
console.log("arr1.slice(-2)   : ", arr1.slice(-2));

// 19. Splices

console.log("arr1.splice(4) : ", arr1.splice(4)), arr1;
console.log("arr1.splice(0, 1) : ", arr1.splice(0, 1), arr1);
console.log("arr1.splice(0, 1, 22, 55) : ", arr1.splice(0, 1, 22, 55), arr1);

// 20. Sort

let cars = ["audi", "mercedes", "bmw", "ferrari"];

console.log("Before Sorting : ", cars);
console.log("After Sorting  : ", cars.sort());