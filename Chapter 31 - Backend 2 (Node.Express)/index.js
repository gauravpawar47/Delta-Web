const express = require("express");
const app = express();
const port = 8080;

app.listen(port, () => {
  console.log(`Server is Running ${port}`);
});

app.get("/", (req, res) => {
  res.send("ROOT");
});

app.get("/apple", (req, res) => {
  res.send("Apple Is responded");
});

app.get("/banana", (req, res) => {
  res.send("Banana Is responded");
});

app.get("/:username/:password", (req, res) => {
  console.log(req.params);
  res.send("Welcome !! ");
});

app.get("/orange", (req, res) => {
  res.send("Orange Is responded");
});

app.get("/search", (req, res) => {
  let { q } = req.query;
  if (!q) {
    res.send(`Nothing Searched ...`);
  }
  console.log("Query Recieved..");
  res.send(`Searching results for ${q} ...`);
});

app.get("*", (req, res) => {
  res.send("This Path doesn't Exist");
});

app.post("/", (req, res) => {
  res.send("POST type Request is Originated");
});
