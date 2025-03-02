const mongoose = require("mongoose");

main()
  .then((res) => {
    console.log("Connection Successful !");
  })
  .catch((err) => console.log(err));

async function main() {
  mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

const user1 = new User({
  name: "Gaurav Pawar",
  email: "gauravpawar@gmail.com",
  age: 20,
});

const user2 = new User({
  name: "Pratik Nikam",
  email: "nikampratik@gmail.com",
  age: 21,
});

// user1.save();

// user2
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.insertMany([
//   {
//     name: "Somesh Gaikwad",
//     email: "somesh@gmail.com",
//     age: 22,
//   },
//   {
//     name: "Aditya Sadavare",
//     email: "aditya@gmail.com",
//     age: 23,
//   },
//   {
//     name: "Pruthviraj Patil",
//     email: "patil@gmail.com",
//     age: 17,
//   },
// ])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.find({ age: { $gte: 18 } }).then((tuples) => {
//   for (tuple of tuples) {
//     console.log("Name : " + tuple.name);
//   }
// });

// User.findOne({ age: { $gte: 18 } }).then((data) => {
//   console.log("Name : " + data.name);
// });

// User.findById("67c3f441a1f5e53e8fb819ae").then((data) => {
//   console.log(data);
// });

// User.updateOne({ email: "gauravpawar@gmail.com" }, { age: 21 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.updateMany({ age: { $gte: 22 } }, { age: 40 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findOneAndUpdate({ name: "Gaurav Pawar" }, { age: 25 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findByIdAndUpdate("67c3f12f748d2d3a56e6b45b", { age: 55 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.deleteOne({ name: "Gaurav Pawar" })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.deleteMany({ age: { $gte: 40 } })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findByIdAndDelete("67c3f13e3e803c5163bea6fd")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
