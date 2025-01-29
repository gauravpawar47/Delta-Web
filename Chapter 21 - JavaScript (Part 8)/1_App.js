// For each for Arrays

let arr = [1, 2, 3, 4, 5];
let p = function(e)
{
    console.log(e);
}

// arr.forEach(p);

arr.forEach((e)=>{
    console.log(e);
})

// For each for Objects

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

obj.forEach((a) =>{
    console.log(a.name);
    console.log(a.marks);
})