let inputs = document.querySelector('input');

// inputs.addEventListener('keypress', ()=>{
//     console.log("Key is Press");
// })

// inputs.addEventListener('keyup', ()=>{
//     console.log("Key is Up");
// })

// inputs.addEventListener('keydown', ()=>{
//     console.log("Key is Down");
// })

inputs.addEventListener('keydown', (event)=>{
    console.log("Key is Down");
    console.log("Key   : ", event.key);
    console.log("ASCII : ", event.keyCode);

    if(event.key == 'ArrowUp')
    {
        window.alert("Up is Pressed")
    }
    else if(event.key == 'ArrowRight')
    {
        window.alert("Right is Pressed")
    }
    else if(event.key == 'ArrowDown')
    {
        window.alert("Down is Pressed")
    }
    else if(event.key == 'ArrowLeft')
    {
        window.alert("Left is Pressed")
    }
})
