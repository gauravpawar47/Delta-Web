// Task 1 

const square = (a) => (
    a * a
)

console.log("Square of 5 : ", square(5));

// Task 2 

let print = setInterval(()=>{
    console.log("Hello World");
}, 2000);

let stop = setTimeout(()=>{
    console.log("Clear Interval");
    clearInterval(print);
}, 10000);
