let months = ["January", "July", "March", "August"];

console.log("Before : ", months);
console.log("After  : ", months.splice(0, 2, "June", "July"), months)

let lang = ["C", "C++", "JAVA", "PYTHON", "HTML", "C#", "SQL", "JAVASCRIPT"];

console.log("Before : ", lang);
console.log("After  : ", lang.reverse().indexOf("JAVASCRIPT"));