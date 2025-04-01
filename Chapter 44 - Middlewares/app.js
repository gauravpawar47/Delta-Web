const express = require("express");
const app = express();

// app.use((req, res, next) => {
//   console.log("Hi, I'm a Middleware on 8080 port");
//   next();
// });

// app.use("/", (req, res) => {
//   res.send("Hi, I'm a Middleware on Root of 8080 port");
// });

// app.use("/random", (req, res) => {
//   res.send("Hi, I'm a Middleware on Random of 8080 port");
// });

// app.use("/random/page", (req, res) => {
//   res.send("I'm only for Random page");
// });

// app.use("/random", (req, res) => {
//   res.send("I'm only for Random");
// });

const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  throw new Error("Access Denied");
};

app.use("/api", checkToken, (req, res) => {
  res.send("Api call is made");
});

app.use((req, res, next) => {
  req.time = new Date(Date.now()).toString();
  console.log(req.method, req.hostname, req.path, req.time);
  next();
});

app.use((req, res) => {
  res.send("Error 404 !");
});

app.listen(8080, () => {
  console.log("Server is Running on Port 8080 !");
});
