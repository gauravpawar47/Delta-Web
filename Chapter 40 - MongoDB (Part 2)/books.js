const mongoose = require("mongoose");

main()
  .then((res) => {
    console.log("Connection Successful !");
  })
  .catch((err) => console.log(err));

async function main() {
  mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 20,
  },
  author: {
    type: String,
    default: "Kalamkaar",
  },
  discount: {
    type: Number,
    default: 0,
  },
  catergory: {
    type: String,
    enum: ["fiction", "non-fiction"],
  },
  price: {
    type: Number,
    min: [100, "Price is Too minimum to Set"],
  },
});

const Book = new mongoose.model("Book", bookSchema);

// let book1 = new Book({
//   title: "Mathematics III",
//   author: "Nirali Prakashan",
//   price: 500,
// });

let book2 = new Book({
  title: "DSA",
  author: "Pratik Nikam",
});

let book3 = new Book({
  title: "OOP",
  author: "Somesh Gaikwad",
  price: 500,
});

let book4 = new Book({
  title: "Safar",
  price: 200,
});

// book1
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// book2
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// book3
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// book4
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Book.findByIdAndUpdate(
//   "67c41727a555174ddb7dd0d3",
//   { price: 5200 },
//   { runValidators: true }
// )
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err.errors.price.properties.message);
//   });
