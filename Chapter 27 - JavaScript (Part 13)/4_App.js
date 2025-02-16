let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let country = document.querySelector("input").value;
  let colleges = await getColleges(country.toLowerCase());

  display(colleges);
});

async function getColleges(country) {
  try {
    let res = await axios.get(url + country);
    return res.data;
  } catch (e) {
    return [];
  }
}

function display(colleges) {
  let list = document.querySelector("#list");
  list.innerText = "";
  for (college of colleges) {
    let li = document.createElement("li");
    li.innerText = college.name;
    list.appendChild(li);
  }
}
