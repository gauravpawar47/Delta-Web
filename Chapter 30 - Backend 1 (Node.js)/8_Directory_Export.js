const fruits = require("./8_Fruits");
console.log(fruits +"\n");

for(let i = 0; i < fruits.length; i++)
{
    console.log("Color of Fruit "+ fruits[i].name +" is : "+ fruits[i].color);
}