async function greet()
{
    // throw "Bad Request";
    return "Hello !!";
}

console.log(greet());

greet().then((result) => {
    console.log("Result : ", result);
})
.catch((err) =>{
    console.log("Error : ", err)
})


let demo = async () => { return 5};