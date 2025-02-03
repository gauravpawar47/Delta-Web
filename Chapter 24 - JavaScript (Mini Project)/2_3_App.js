let btn = document.querySelector('button');

btn.addEventListener('click', () => {
    let input = document.querySelector('input');
    let task = input.value;
    let item = document.createElement('li');
    let ul = document.querySelector('ul');
    
    if(task == '')
    {
        alert("It's Empty");
        return;
    }   

    let dltBtn = document.createElement('button');
    dltBtn.innerText = "Delete Task";
    dltBtn.classList.add("delete");

    dltBtn.addEventListener('click', () => {
        ul.removeChild(item);
    });

    item.innerText = task;
    item.appendChild(dltBtn);
    ul.appendChild(item);
    input.value = ' ';
});


