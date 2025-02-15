h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            let n = Math.floor(Math.random() * 10) + 1;
            if(n > 7)
            {
                reject("PROMISE REJECTED !");
            }

            h1.style.color = color;
            console.log("Color Changed to ", color);
            resolve("PROMISE RESOLVED !");
        }, delay);
    });
}

async function demo()
{
    try
    {
        await changeColor("red", 1000);
        await changeColor("green", 1000);
        await changeColor("blue", 1000);
        await changeColor("yellow", 1000);
    }
    catch(err)
    {
        console.log('Error Caught');
        console.log(err);
    }

    let a = 5;
    console.log(a +" + 44 : "+ (a + 44));
}

demo()