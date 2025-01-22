let num = 100;

if (num % 10 == 0) {
  console.log("Good");
} else {
  console.log("Bad");
}

let name = prompt("Enter Name");
let age = parseInt(prompt("Enter Age"));

alert(name + " is " + age + " years old");

let quarter = 2;

switch (quarter) {
  case 1:
    console.log("JAN | FEB | MAR");
    break;
  case 2:
    console.log("APR | MAY | JUN");
    break;
  case 3:
    console.log("JUL | AUG | SEP");
    break;
  case 4:
    console.log("OCT | NOV | DEC");
    break;
  default:
    console.log("ERROR");
    break;
}


let str = "Apple"
if((str[0] == 'A' || str[0] == 'a') && str.length > 5)
{
    console.log("Golden String");
}
else{
    console.log("Not Golden String");
}

let a = 10;
let b = 4;
let c = 66;

if(a > b)
{
    if(a > c)
    {
        console.log("A is Largest");
    }   
    else if(c > a)
    {
        console.log("C is Largest");
    }
}
else
{
    if(c > b)
    {
        console.log("C Is Largest")
    }
    else
    {
        console.log("B is Largest");
    }
}

let n1 = 88;
let n2 = 288;

if(n1 % 10 == n2 % 10)
{
    console.log("SAME LAST DIGIT ", n1 % 10);
}
else
{
    console.log("NOT SAME LAST DIGIT", n1 % 10);
}