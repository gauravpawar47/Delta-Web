function one()
{
    console.log("1");
    return 1;
}
function two()
{
    console.log("2");
    return 2;
}

function three()
{
    return one() + one() + two();
}

console.log(three());