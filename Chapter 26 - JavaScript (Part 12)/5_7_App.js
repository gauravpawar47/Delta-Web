let jsonData = '{"name": "Gaurav Pawar", "id": 1007, "role": "SDE"}';
console.log(jsonData);

let jsonRes = JSON.parse(jsonData);
console.log(jsonRes);

console.log("Id   : "+ jsonRes.id);
console.log("Name : "+ jsonRes.name);
console.log("Role : "+ jsonRes.role);

let data = {
    "name": "Pratik Nikam",
    "id": 1009,
    "role": "ZHADU KHATA"
};

console.log(data);
let jsonForm = JSON.stringify(data);
console.log(jsonForm);