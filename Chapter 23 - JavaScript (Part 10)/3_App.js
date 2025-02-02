let btn = document.querySelector('.btn');
btn.addEventListener('click', ()=>{
    window.alert("Button is Illegaly Pressed");
});

btn.addEventListener('dblclick', ()=>{
    window.alert("Button is Double Pressed");
});