let form = document.querySelector('form');
form.addEventListener('submit', function(event){
    event.preventDefault();
    window.alert("Form is Submitted");

    let username = document.querySelector('#user');
    let password = document.querySelector('#pass');

    console.log("username : ", username.value);
    console.log("password : ", password.value);

    console.log("username : ", this.elements[0].value);
    console.log("password : ", this.elements[1].value);
})

