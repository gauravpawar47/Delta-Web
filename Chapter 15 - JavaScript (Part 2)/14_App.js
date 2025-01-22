let a = 10;
let b = 11;

document.write("a : ", a ,"<br>");
document.write("b : ", b ,"<br>");

if(a > b && a == b)
{
    document.write("Both are Equal <br>")
}
else if(b > a || b != a)
{
    document.write("B is Greatest <br>");
}

if(!a == b)
{
    document.write("A != B <br>")
}