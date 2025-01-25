// 1. For Loop
console.log("Print Forward : ")
for(let i = 0; i < 5; i++)
{
    console.log(i + 1);
}

// 2. Dry Run
console.log("Print Backward : ")
for(let i = 5; i >= 1; i--)
{
    console.log(i);
}

// 3. Odd Numbers
console.log("Odd Numbers")
for(let i = 1; i <= 15; i++)
{
    if(i % 2 != 0)
    {
        console.log(i);
    }
}

// 4. Even Numbers
console.log("Even Numbers")
for(let i = 1; i <= 15; i++)
{
    if(i % 2 == 0)
    {
        console.log(i);
    }
}

// 5. Infinite Loops

// 6. Multiplication Table of 5
console.log("Multiplication Table of 5");
for(let i = 1; i <= 10; i++)
{
    console.log(5 +" X "+ i +" : "+ 5 * i);
}

// 7. Nested For Loops

console.log("Nested Loops")
for(let i = 1; i <= 5; i++)
{
    for(let j = 1; j <= 5; j++)
    {
        console.log(j);
    }
    console.log("-");
}