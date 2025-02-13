let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("Color Changed");
    }, delay);
  });
}

changeColor("red", 1000)
  .then(() => {
    console.log("Red color was printed");
    return changeColor("orange", 2000);
  })
  .then(() => {
    console.log("Orange color was printed");
    return changeColor("pink", 4000);
  })
  .then(() => {
    console.log("Pink color was printed");
  })
  .catch(() => {
    console.log("Failed to Apply Color");
  });
