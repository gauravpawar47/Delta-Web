let url = "https://dog.ceo/api/breeds/image/random";

async function getData() {
  try {
    let res = await axios.get(url);
    return res.data.message;
  } catch (e) {
    console.log("Error : " + e);
    return "/";
  }
}

let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
  let image = document.querySelector("#dog");
  let link = await getData();
  image.setAttribute("src", link);
});

getData();
