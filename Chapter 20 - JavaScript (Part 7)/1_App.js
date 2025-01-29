const student ={
    name: "Gaurav Pawar",
    age: 20,
    dept: "COMPUTER ENGINEERING",
    year: "TE",
    getDetails(){
        console.log("Name : ", this.name);
        console.log("Age  : ", this.age);
        console.log("Year : ", this.dept);
        console.log("Dept : ", this.year);
    }
}

console.log(student.getDetails());
