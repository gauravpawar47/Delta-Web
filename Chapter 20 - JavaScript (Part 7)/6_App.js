console.log("Interval Started");

let i = 1;
let increment = setInterval(()=>{
    console.log(i);
    i++;
}, 4000);

console.log("Interval Ended");

console.log(increment);