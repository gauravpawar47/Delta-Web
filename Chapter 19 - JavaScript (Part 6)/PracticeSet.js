// Task 1

let arr = [1, 2, 3, 4, 5, 6, 6, 2, 3];
let n = 3;

function large(n)
{
    for(let i = 0; i < arr.length; i++)
    {
        if(n < arr[i])
        {
            console.log(arr[i]);
        }
    }
}

large(n);

// Task 2

let str = "abcdabcdefgggh";

function getUnique(str)
{
    let s = "";
    for(let i = 0; i < str.length; i++)
    {
        if(!s.includes(str.charAt(i)))
        {
            s += str.charAt(i);
        }
    }

    return s;
}

console.log("Original : ", str);
console.log("Uniuqe   : ", getUnique(str));

// Task 3

let country = ["Austrilia", "Germany", "United States of America"];

function getLargest(country)
{
    let maxString = "";
    for(let i = 0; i < country.length - 1; i++)
    {
        if(country[i].length > country[i + 1].length)
        {
            maxString = country[i + 1];
        }
    }

    if(maxString.length < country[country.length - 1].length)
    {
        maxString = country[country.length - 1];
    }

    return maxString;
}

console.log("Country    : ", country);
console.log("Max String : ", getLargest(country));

// Task 4

let s = "gaurav";
function countVowels(s)
{
    let countVowel = 0;
    for(let i = 0; i < s.length; i++)
    {
        if(s.charAt(i) == 'a' || s.charAt(i) == 'e' || s.charAt(i) == 'i' || s.charAt(i) == 'o' || s.charAt(i) == 'u')
        {
            countVowel++;
        }
    }

    return countVowel;
}

console.log("String : ", s);
console.log("Vowels : ", countVowels(s));

// Task 5

function randome(start, end)
{
    return Math.floor(Math.random() * (end - start)) + start;
}

console.log("Random 1 to 10  : ", randome(1, 10));
console.log("Random 11 to 20 : ", randome(11, 20));
console.log("Random 21 to 30 : ", randome(21, 30));