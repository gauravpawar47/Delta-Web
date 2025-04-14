const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("Connection Successful !"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema({
  username: String,
  addresses: [
    {
      _id: false,
      location: String,
      city: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

const addUsers = async () => {
  let user1 = new User({
    username: "Gaurav Pawar",
    addresses: [
      {
        location: "Flat No 302, Rutej Park, Sector 32-A, Ravet",
        city: "Pune",
      },
    ],
  });

  user1.addresses.push({
    location: "Fat No 12, Suyojit Hieghts, Nashik Road",
    city: "Nashik",
  });

  let result = await user1.save();
  console.log(result);
};

addUsers();
