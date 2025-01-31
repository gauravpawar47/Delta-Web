let sum = function(a, b, c = 5)
{
    return a + b + c;
}

console.log("Sum of 1, 2, 3 : ", sum(1, 2, 3));
console.log("Sum of 1, 2 : ", sum(1, 2));