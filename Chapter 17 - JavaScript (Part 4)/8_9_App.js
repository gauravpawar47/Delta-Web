// 8. While Loop

let i = 1;
while(i <= 10)
{
    console.log(i);
    i++;
}

// 9. Favourite Movie

let fav = "lakshya";
let guess = prompt("Guess Favourite Movie ")

while(guess != fav && guess != "quit")
{
    guess = prompt("Wrong Guess Please Try again ")
}
