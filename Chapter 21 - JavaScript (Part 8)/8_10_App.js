// 8. Spread

let arr = [1, 3, 2, 4, 4, 2, 1];
console.log("Minimum Value : ", Math.min(...arr));
console.log("Maximum Value : ", Math.max(...arr));

// 9. Spread With Arrays

let name = "Gaurav";
let ch = [...name];

console.log("Name   : ", name);
console.log("Spread : ", ch);

// 10. Spread With Objects
const data = {
    email : "gauravpawar@gmail.com",
    pass  : "notsofar",
};

console.log("Object : ", data);

let obj = {...data, country: "BHARAT"};
console.log("Object Details : ", obj);  

console.log("Array to Object");
let arrs = {...arr};
console.log(arrs);
