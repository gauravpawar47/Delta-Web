let url = "https://catfact.ninja/fact";

async function getFact()
{
    try
    {
        let res = await fetch(url);
        let data = await res.json();
        console.log("JOKE : "+ data.fact);
    }
    catch(e)
    {
        console.log(e);
    }
}

getFact();