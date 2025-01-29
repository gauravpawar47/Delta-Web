// 3. Arrow Functions

const sum = (a, b) => {
    return a + b;
}

console.log("Sum of 2 & 5 : ", sum(2, 5));

const cube = (a) => {
    return a * a * a;
}

console.log("Cube of 3 : ", cube(3));

// 4. Implicit Return Statement

const subtraction = (a, b) => (a - b);
console.log("Subtraction of 6 & 3 : ", subtraction(6, 3));