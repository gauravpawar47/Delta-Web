let div = document.querySelector('div');
let ul = document.querySelector('ul');
let lis = document.querySelectorAll('li');

div.addEventListener('click', () => {
    console.log("Div Was Clicked");
})

ul.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log("Ul Was Clicked");
})

for(li of lis)
{
    li.addEventListener('click', (event) => {
        event.stopPropagation();
        console.log("Li Was Clicked");
    })
}