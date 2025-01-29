// Map Function

let num = [1, 2, 3, 4, 5];
console.log("Original Array Elements : ", num);

let double = num.map((e) => {
    return e * 2;
});
console.log("Doubled Array Elements  : ", double);

const obj = [
    {
        name  : "Gaurav Pawar",
        marks : 9.5
    },
    {
        name  : "Somesh Gaikwad",
        marks : 9.7
    },
    {
        name  : "Pratik Nikam",
        marks : 9.2
    }
];

let gpa = obj.map((e) => {
    return e.marks * 10;
});

console.log("GPA : ", gpa);

// Filter Function  

let n = [2, 4, 1, 6, 7, 8, 12, 2];
console.log("Without Filter : ", n);

let ans = n.filter((e) => (e % 2 == 0));
console.log("With    Filter : ", ans);
