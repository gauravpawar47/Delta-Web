let input1 = document.querySelector("#txt1");
let input2 = document.querySelector("#txt2");

input1.addEventListener('change', () => {
    console.log("Change Event Occur : ", txt1.value);
})

input2.addEventListener('input', () => {
    console.log("Input Event Occur : ", txt2.value);
})