const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    return next();
  }
  next(new ExpressError(401, "Access Denied")); // Pass error to next()
};

// Route
app.use("/api", checkToken, (req, res) => {
  res.send("API call is made");
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  let status = err.status || 500;
  let message = err.message || "SOME ERROR"; // Default error message
  res.status(status).send(message);
});

app.get("/admin", (req, res) => {
  throw new ExpressError(403, "Acccess to Admin is Forbidden !");
});

// Start Server
app.listen(8080, () => {
  console.log("Server is Running on Port 8080!");
});
