let start = ["January", "July", "March", "August"];

console.log("Before : ", start);

start.shift();
start.shift();
start.unshift("June");
start.unshift("July");

console.log("After  : ", start);