alert("Guess the Number between 1 to 10")
let random = Math.floor(Math.random() * 100) + 1;

while(true)
{
    let guess = parseInt(prompt("Enter the Number"));
    if(guess == random)
    {
        alert("You Guessed It Right !");
        break;
    }
    else if(guess < random)
    {
        alert("Just a Smallest Number");
    }
    else if(guess > random)
    {
        alert("Just a Greatest Number");
    }
}
