// Task 1

const arrayAvg = (arr) =>{
    let sum = 0;
    for(let i = 0; i < arr.length; i++)
    {
        sum += arr[i];
    }

    return sum / arr.length;
}

let arr = [99, 97, 98, 91, 94, 97];
console.log("Array Elements : ", arr);
console.log("Array Average  : ", arrayAvg(arr));

// Task 2 

const isEven = (a) =>{
    return a % 2 == 0 ? "EVEN" : "ODD";
}

console.log("2 is : ", isEven(2));
console.log("5 is : ", isEven(5));
console.log("6 is : ", isEven(6));

// Task 3

// --> Output : Hello, World

// Task 4

// --> Output : 4