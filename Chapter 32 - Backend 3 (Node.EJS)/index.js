const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.set("views engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/home", (req, res) => {
  res.render("home.ejs");
});

app.get("/hello", (req, res) => {
  res.render("hello.ejs");
});

app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  let instaData = require("./data.json");
  let data = instaData[username];
  if (data) {
    res.render("instagram.ejs", { data });
  } else {
    res.render("error.ejs");
  }
});

app.get("/rolldice", (req, res) => {
  let n = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs", { diceVal: n });
});

app.listen(port, () => {
  console.log("Running ..!");
});
