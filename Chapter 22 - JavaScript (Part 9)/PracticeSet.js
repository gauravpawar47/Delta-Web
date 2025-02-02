// Task 1

let body = document.querySelector("body");
let input = document.createElement("input");
let btn = document.createElement("button");

btn.innerHTML = "Click Me";

// Task 2
input.placeholder = "username";
btn.setAttribute('id', 'btn');

body.appendChild(input);
body.appendChild(btn);

// Task 3 

let change = document.querySelector("#btn");
change.style.backgroundColor = 'blue';
change.style.color = 'white';

// Task 4

let h1 = document.createElement("h1");

h1.innerText = "DOM Practice";
h1.style.textDecoration = "underline";
h1.style.color = "purple";

body.appendChild(h1);

// Task 5

let para = document.createElement('p');

para.innerHTML = "Apna College <b>Delta</b> Practice";
para.style.textDecoration = "bold";

body.appendChild(para);