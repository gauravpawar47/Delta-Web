let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  console.log(this);
  let h1 = document.querySelector("h1");
  let h3 = document.querySelector("h3");
  let p = document.querySelector("p");

  h1.style.backgroundColor = "blue";
  h3.style.backgroundColor = "blue";
  p.style.backgroundColor = "blue";
});
