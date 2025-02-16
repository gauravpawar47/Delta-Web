let url = "https://catfact.ninja/fact";

async function getData() {
  try {
    let res = await axios.get(url);
    return res.data.fact;
  } catch (e) {
    console.log("Error : " + e);
    return "NO FACT";
  }
}

getData();

let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
  let p = document.querySelector("#fact");
  p.innerText = await getData();
});
