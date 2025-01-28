// 1. Getting Started

function loop()
{
    for(let i = 0; i <= 10; i++)
    {
        console.log("Hello !");
    }
}

loop();

// 2. Practice Question

function poem()
{
    console.log("Twinkle Twinkle Little Star");
}

poem();

// 3. Practice Question

function roll()
{
    let random = Math.floor(Math.random() * 6) + 1;
    console.log(random);
}

roll();

// 4. Function with Arguments

function add(a, b)
{
    return a + b;
}

console.log("Sum of 1 and 5 : ", add(1, 5));

// 5. Practice Question

function avg(a, b, c)
{
    return (a + b + c) / 3;
}

console.log("Average of 99, 98, 90 : ", avg(99, 98, 90));

// 6. Practice Question

function table()
{
    for(let i = 1; i <= 10; i++)
    {
        console.log(2 +" X "+ i +" : "+ (2 * i));
    }
}

table();

// 7. Return Keyword

avg(98, 95, 96);

// 8. Practice Question

function sum(n)
{
    let sum = 0;
    for(let i = 1; i <= n; i++)
    {
        sum += i;
    } 

    return sum;
}

console.log("Sum from 1 to 7 : ", sum(7));   

// 9.  Practice Question

let str = ["hello", "my", "name", "is", "gaurav"];
function concatString(str)
{
    let s = "";
    for(let i = 0; i < str.length; i++)
    {
        s += str[i] +" ";
    }

    return s;
}

console.log("String Array  : ", str);
console.log("String Result : ", concatString(str));

// 14. Function Expression

const sums = function(a, b){
    return a + b;
}

console.log("Sum of 18 & 534 : ", sums(18, 534));

// 15. High Order Functions

let greets = function()
{
    console.log("Hello");
}

function multiplie(greets, n)
{
    for(let i = 1; i <= n; i++)
    {
        greets();
    }
}

multiplie(greets, 10);

// 16. High Order Functions (Returns)

function evenOdd(test, n)
{
    if(test == "ODD")
    {
        return function()
        {
            console.log((n % 2) != 0);
        }
    }
    else if(test == "EVEN")
    {
        return function()
        {
            console.log((n % 2) == 0);
        }
    }
    else
    {
        console.log("Wrong Input");
    }
}

console.log(evenOdd("ODD", 5));
console.log(evenOdd("EVEN", 15));

// 17. Methods

const obj = {
    add: function(a, b)
    {
        return a + b;
    },
    sub: function(a, b)
    {
        return a - b;
    },
    mul: function(a, b)
    {
        return a * b;
    },
    div: function(a, b)
    {
        return a / b;
    },
}

console.log("Addition       : ", obj.add(5, 33));
console.log("Subtraction    : ", obj.sub(5, 33));
console.log("Multiplication : ", obj.mul(5, 33));
console.log("Divison        : ", obj.div(33, 33));