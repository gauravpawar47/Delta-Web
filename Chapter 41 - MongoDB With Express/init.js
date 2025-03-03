const Chat = require("./models/chat");
const mongoose = require("mongoose");

let chats = [
  {
    from: "Gaurav Pawar",
    to: "Pratik Nikam",
    msg: "Bhai, Finally Microsoft Lagli 52 LPA Package !!!!!!",
    createdAt: new Date(),
  },
  {
    from: "Pratik Nikam",
    to: "Gaurav Pawar",
    msg: "Congratulations Bhavaa !! Pahila Refferal mala",
    createdAt: new Date(),
  },
  {
    from: "Somesh Gaikwad",
    to: "Pratik Nikam",
    msg: "Fendry, kay re kuth lagli placement",
    createdAt: new Date(),
  },
  {
    from: "Pruthviraj Patil",
    to: "Chinmay Kamlaskar",
    msg: "Bhaje Deu ka Tula ?? kay ree",
    createdAt: new Date(),
  },
  {
    from: "Chinmay Kamlaskar",
    to: "Pruthviraj Patil",
    msg: "Sandaas madhe jaun paath kr ja, Revision kr adhi",
    createdAt: new Date(),
  },
  {
    from: "Pratik Nikam",
    to: "Somesh Gaikwad",
    msg: "Dongrat Phasloy ree, Dari Khorya madhe !!",
    createdAt: new Date(),
  },
];

main()
  .then(() => console.log("MongoDB Established !"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

Chat.insertMany(chats);
