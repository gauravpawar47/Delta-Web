let url = "https://icanhazdadjoke.com/";

async function getJoke() {
  try {
    let config = { headers: { Accept: "text/plain" } };
    let res = await axios.get(url, config);
    return res.data;
  } catch (e) {
    return "Error " + e;
  }
}

let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
  let p = document.querySelector("#joke");
  p.innerText = await getJoke(); 
});
