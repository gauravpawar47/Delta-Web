let p = document.querySelector('h1');
let box = document.querySelector('.box');

p.addEventListener('click', () =>{
    window.alert("Ohh You Get the Secret Key !");
});

box.addEventListener('mouseover', () =>{
    console.log("Ohh You Get this one too !");
});