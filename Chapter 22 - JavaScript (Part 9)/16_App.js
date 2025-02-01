// Task 1

let task1 = document.createElement('p');
let body = document.querySelector('body');

task1.style.color = 'red';
task1.innerText = "Hey I'm Red!";

body.appendChild(task1);

// Task 2

let task2 = document.createElement('h3');

task2.style.color = 'blue';
task2.innerText = "I'm Blue H3";

body.appendChild(task2);

// Task 3

let task3 = document.createElement('div');

task3.style.backgroundColor = 'pink';
task3.style.border = '2px solid black';

let h1 = document.createElement('h1');
h1.innerText = "I'm in Div";

let p = document.createElement('p');
p.innerText = "Me Too";

task3.appendChild(h1);
task3.appendChild(p);

body.appendChild(task3);
