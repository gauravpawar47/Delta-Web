let names = ["Gaurav Pawar", "Pratik Nikam", "Chinmay Kamlaskar", "Aditya Sadavare", "Somesh Gaikwad"];
let [winner, runnerup, ...participants] = names;

console.log("Total Participants : ", names);
console.log("Winner       : ", winner);
console.log("Runner Up    : ", runnerup);
console.log("Participants : ", participants);