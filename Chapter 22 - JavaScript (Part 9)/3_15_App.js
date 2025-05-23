// 3. Getting Started

console.dir("Heading : " + document.all[9].innerText);
document.all[9].innerText = "Iron Man";
console.dir("Changed : " + document.all[9].innerText);

// 5. Seleting Element By ID

let imgs = document.getElementById("mainImg");
console.log("Img : ", imgs);

// 6. Selecting Element By Class

let smalled1 = document.getElementsByClassName("small1")[0];
console.log("Img", smalled1);

let smalled2 = document.getElementsByClassName("small2")[0];
console.log("Img", smalled2);

let smalled3 = document.getElementsByClassName("small3")[0];
console.log("Img", smalled3);

smalled1.src = "Assets/Amazing-spiderman.jpg";
smalled2.src = "Assets/Amazing-spiderman.jpg";
smalled3.src = "Assets/Amazing-spiderman.jpg";

// 7. Selecting Element By Tag Name

console.log("Paragraph Tags : ", document.getElementsByTagName("p"));
console.log("Paragraph 1    : ", document.getElementsByTagName("p")[0]);

console.log(
  "Paragraph 1 Change : ",
  (document.getElementsByTagName("p")[0].innerText = "Hello World")
);

// 8. Query Selectors

console.log("Paragarph QS : ", document.querySelector("p"));
console.log("Class QS     : ", document.querySelector(".images"));
console.log("Id QS        : ", document.querySelector("#mainImg"));
console.log("Nested QS    : ", document.querySelectorAll("div a"));

// 9. Setting Content In Objects

let para = document.getElementsByTagName("p")[1];

console.log("Paragraph Inner Text   : ", para.innerText);
console.log("Paragraph Text Content : ", para.textContent);
console.log("Paragraph Inner HTML   : ", para.innerHTML);

// 10.Manipulating Attributes

imgs.setAttribute("id", "docss");
smalled3.setAttribute("src", "Assets/Spider-Man.png");

// 11. Manipulating Style (With Style Attributes)

let heading = document.querySelector("h1");
heading.style.color = "red";
heading.style.backgroundColor = "purple";

let links = document.querySelectorAll("a");
for (link of links) {
  link.style.color = "green";
}

// 12.Classlist Property

let box = document.querySelector("p");
console.log("Box Class   : ", box.classList);

box.classList.add("green");
console.log("Box Updated : ", box.classList);

box.classList.add("back");
console.log("Box Updated : ", box.classList);

console.log("Box Contains Green : ", box.classList.contains("green"));

box.classList.remove("green");
console.log("Removed Updated : ", box.classList);

box.classList.toggle("check1");
console.log("Added Using Toggle   : ", box.classList);

box.classList.toggle("check1");
console.log("Removed Using Toggle : ", box.classList);

// 13. Navigation on Page

let h4tag = document.querySelector("h4");
let pub = document.querySelector(".pubInfo");
console.log("H4 Parent Element    : ", h4tag.parentElement);
console.log("Public Info Children Element  : ", pub.children);
console.log("Public Info Children Count    : ", pub.childElementCount);

let ulist = document.querySelector(".uls");

console.log("Unordered List Children          : ", ulist.children);
console.log("Unordered List Children Count    : ", ulist.childElementCount);

for (child of ulist.children) {
  console.log("Children : ", child);
}

console.log(
  "Previous Of Children 1    : ",
  ulist.children[1].previousElementSibling
);
console.log(
  "Next of Children 1        : ",
  ulist.children[1].nextElementSibling
);

// 14. Adding Elements on Page

let paras = document.createElement("p");
let body = document.querySelector("body");

paras.innerText = "Hello This is New Paragraph";

console.log("New Paragraph : ", paras);
body.appendChild(paras);

paras.append("this is New Appended Changes");
console.log("Updated Paragraph Append : ", paras);

paras.prepend("this is new Prepended Text !");
console.log("Updated Paragraph Prepend : ", paras);

let btn1 = document.createElement("button");
let btn2 = document.createElement("button");

btn1.innerText = "BEFORE";
btn2.innerText = "AFTER";

let mainPara = document.querySelector("p");

mainPara.insertAdjacentElement("beforebegin", btn1);
mainPara.insertAdjacentElement("beforeend", btn2);

let btn3 = document.createElement("button");
let btn4 = document.createElement("button");

let sndPara = document.querySelector(".paragraphs");

btn3.innerText = "BEFORE";
btn4.innerText = "AFTER";

sndPara.insertAdjacentElement("afterbegin", btn4);
sndPara.insertAdjacentElement("afterend", btn3);

// 15. Remove Elements from Page

btn1.remove();
btn4.remove();