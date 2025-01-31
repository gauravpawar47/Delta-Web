const student = {
    username : "student47",
    password : "notsofar",
    name : "Gaurav Pawar",
    age : 20,
    div : "B",
    city : "Pune"
};

const {username : user, password : pass, branch = "COMP", ...otherdetails} = student;

console.log("Username      : ", user);
console.log("Password      : ", pass);
console.log("Branch        : ", branch);
console.log("Other Details : ", otherdetails);