// 10. Getting Started to 12

let details = ["Gaurav", 9.72, true];
let marks = [90, 99, 88, 43];

console.log(details, "length : ", details.length);
console.log("Accessing u from Gaurav", details[0][2], " and its length : ", details[0].length);
console.log(marks);

// 13. Mutable

let fruits = ["Mango", "Apple", "Banana"];

console.log("Before Updates : ", fruits);
fruits[1] = "Pine Apple"; 
console.log("After Updates  : ", fruits);

// 14. Methods

let cars = ["Audi", "Mercedes", "Porsche"];

console.log("Original : ", cars);
console.log("Push Lexus : ", cars.push("Lexus"), cars);
console.log("Pop : ", cars.pop(), cars);

console.log("Unshift BMW : ", cars.unshift("BMW"), cars);
console.log("Unshift Ferrari : ", cars.unshift("Ferrari"), cars);
console.log("Shift : ", cars.shift(), cars);
