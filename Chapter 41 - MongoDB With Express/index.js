const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat");
const methodOverride = require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

main()
  .then(() => console.log("MongoDB Established !"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  res.render("index.ejs", { chats });
});

let chat1 = new Chat({
  from: "Gaurav",
  to: "Pratik",
  msg: "Bhai, Finally Microsoft Lagliii !!!",
  createdAt: new Date(),
});

// chat1
//   .save()
//   .then((res) => {
//     console.log("Data Saved " + res[2]);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

app.get("/", (req, res) => {
  res.send("Everything is Working on Root !");
});

app.listen(port, () => {
  console.log("Server is Running");
});

app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/chats", (req, res) => {
  let { from, to, msg } = req.body;

  let newChat = new Chat({
    from: from,
    to: to,
    msg: msg,
    createdAt: new Date(), // Fixed typo from "createAt" to "createdAt"
  });

  newChat
    .save()
    .then((chat) => {
      console.log("Chat saved:", chat);
      res.redirect("/chats");
    })
    .catch((err) => {
      console.error("Error saving chat:", err);
      res.status(500).send("Error saving chat");
    });
});

app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);

  res.render("edit.ejs", { chat });
});

app.put("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let { msg } = req.body;

  let updatedChat = await Chat.findByIdAndUpdate(
    id,
    { msg: msg },
    { runValidatos: true, new: true }
  );

  res.redirect("/chats");
});

app.delete("/chats/:id/", async (req, res) => {
  let { id } = req.params;
  let query = await Chat.findByIdAndDelete(id);
  res.redirect("/chats");
});
