const student = {
    name: "Gaurav Pawar",
    age: 20,
    dept: "COMPUTER ENGINEERING",
    getInfo: function(){
        return this.name;
    },
    getAge: ()=>{
        return this.age;
    }
}

console.log(student.getInfo());
console.log(student.getAge());