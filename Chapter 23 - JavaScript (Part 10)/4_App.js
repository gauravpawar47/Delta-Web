let btn = document.querySelector('button');

btn.addEventListener('click', ()=>{
    let h3 = document.querySelector('h3');
    let div = document.querySelector('div');
    
    let red = Math.floor(Math.random() * 250);
    let green = Math.floor(Math.random() * 250);
    let blue = Math.floor(Math.random() * 250);

    let color = `rgb(${red}, ${green}, ${blue})`;
    h3.innerText = color;
    div.style.backgroundColor = color;
})