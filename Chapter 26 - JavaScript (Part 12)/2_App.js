function getNum()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(Math.floor(Math.random() * 10) + 1);
            resolve();
        }, 1000);
    });
}

async function demo()
{
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
}

demo();