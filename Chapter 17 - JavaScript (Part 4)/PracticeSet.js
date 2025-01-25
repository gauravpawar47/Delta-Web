// Task 1

let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;

console.log("Before Removing : ", arr);
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 2) {
    arr.splice(i, 1);
  }
}
console.log("After  Removing : ", arr);

// Task 2

let n = 287152;
let t = n;
let digits = 0;

while (n > 0) {
  digits++;
  n = Math.floor(n / 10); // Use Math.floor to remove the last digit
}

console.log("No of Digits in ", t, " is : ", digits);

// Task 3

let a = 287152;
let t1 = a;
let sum = 0;

while(a > 0)
{
    let ld = a % 10;
    sum += ld;
    a = Math.floor(a / 10);
}

console.log("No of Digits in ", t1, " is : ", sum);

// Task 4

let fact = 1;
for(let i = 1; i <= 5; i++)
{
    fact *= i;
} 

console.log("Factorial of 5 is : ", fact);

// Task 5
let arrr = [1, 2, 3, 4, 55, 63, 2321, 343, 54992, 12, 3432, 211];
let max = -1;

for(let i = 0; i < arrr.length; i++)
{
    if(max < arrr[i])
    {
        max = arrr[i];
    }
}

console.log("Array : ", arrr);
console.log("Max   : ", max);
