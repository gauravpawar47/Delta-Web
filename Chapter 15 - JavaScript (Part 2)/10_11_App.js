let age = 5;

document.write("Your age : ", age, "<br>");
if(age >= 18)
{
    document.write("You Can Vote <br>");
}
else if(age < 18)
{
    document.write("You Cannot Vote <br>");

    if(age > 10)
    {
        document.write("You're Just a Teenager <br>");
    }
    else
    {
        document.write("You're Just a Kid <br>");
    }
}
