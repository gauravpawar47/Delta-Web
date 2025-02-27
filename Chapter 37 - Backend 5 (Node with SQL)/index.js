const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

let getUser = () => {
  return [
    faker.string.uuid(), // ✅ Use only if 'id' is VARCHAR(36). Change to faker.number.int() if it's INT.
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password({ length: 12 }), // ✅ Ensuring longer passwords
  ];
};

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "ch_37",
  password: "Feeld@nce143",
});

app.get("/", (req, res) => {
  let q = "SELECT COUNT(*) AS count FROM user";
  connection.query(q, (err, result) => {
    if (err) {
      console.error("Error fetching data:", err);
      return res.send("Some error occurred while fetching the data.");
    }
    let count = result[0].count;
    res.render("home.ejs", { count });
  });
});

app.get("/user", (req, res) => {
  let q = "SELECT * FROM user";
  connection.query(q, (err, result) => {
    if (err) {
      console.error("Error fetching data:", err);
      return res.send("Some error occurred while fetching the data.");
    }
    let count = result[0].count;
    res.render("home.ejs", { count });
  });
});


app.listen(8080, (req, res) => {
  console.log("App is Running !");
});
