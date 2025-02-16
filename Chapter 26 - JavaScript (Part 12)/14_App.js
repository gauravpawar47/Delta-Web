let url = "https://catfact.ninja/fact";

fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log("JOKE : " + data.fact);
    return fetch(url);
  })
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log("JOKE : " + data.fact);
  })
  .catch((error) => {
    console.log(error);
  });
