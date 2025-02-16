let url = "http://universities.hipolabs.com/search?country=India";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let state = document.querySelector("input").value.trim().toLowerCase();
  let colleges = await getColleges(state);

  display(colleges);
});

async function getColleges(state) {
  try {
    let res = await axios.get(url);
    let colleges = res.data;

    // Filter colleges by state name
    return colleges.filter(
      (college) =>
        college["state-province"] &&
        college["state-province"].toLowerCase().includes(state)
    );
  } catch (e) {
    console.error("Error fetching data:", e);
    return [];
  }
}

function display(colleges) {
  let list = document.querySelector("#list");
  list.innerHTML = ""; // Clear previous results

  if (colleges.length === 0) {
    list.innerHTML = "<li>No universities found in this state</li>";
    return;
  }

  for (let college of colleges) {
    let li = document.createElement("li");
    li.innerText = college.name;
    list.appendChild(li);
  }
}
