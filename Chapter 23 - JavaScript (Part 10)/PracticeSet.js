// Task 1
let text = document.querySelector('#txt');

text.addEventListener('mouseout', ()=>{
    console.log("Mouse is Out from Input Box");
})

text.addEventListener('keypress', ()=>{
    console.log("Key is Pressed");
})

text.addEventListener('scroll', ()=>{
    console.log("Mouse is Scroll on Input Box");
})

document.querySelector('body').addEventListener('load', ()=>{
    console.log("Page Has Load");
})

// Task 2
let btn = document.createElement("button");
let body = document.querySelector('body');

btn.addEventListener('click', () =>{
    btn.style.backgroundColor = 'green';
})

btn.innerText = "Click Me";
body.appendChild(btn);

// Task 3 

let input = document.createElement("input");
let h2 = document.createElement("h2");

input.placeholder = 'Enter Your Name';
h2.innerText = "Your Name";

input.addEventListener('input', () =>{
    input.value = input.value.replace(/[^a-zA-Z\s]/, '');
    h2.innerText = input.value;
})

body.appendChild(input);
body.appendChild(h2);