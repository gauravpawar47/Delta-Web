const express = require("express");
const mysql = require("mysql2");
const path = require("path");
const { faker } = require("@faker-js/faker");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");

const app = express();

// Set up Express middleware
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: true })); // Parse form data
app.use(methodOverride("_method")); // ✅ Enable method override

// MySQL connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Feeld@nce143",
  database: "ch_37",
});

// 🌟 Homepage Route - Shows User Count
app.get("/", (req, res) => {
  let q = `SELECT COUNT(*) AS count FROM user`;
  connection.query(q, (err, result) => {
    if (err) {
      console.error("Error fetching data:", err);
      return res.send("Some error occurred while fetching data.");
    }
    let count = result[0].count;
    res.render("home", { count });
  });
});

// 🌟 Show All Users
app.get("/user", (req, res) => {
  let q = `SELECT * FROM user`;
  connection.query(q, (err, users) => {
    if (err) {
      return res.send("Some error occurred while fetching users.");
    }
    res.render("users", { users });
  });
});

// 🌟 Edit User Form Route
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id = ?`;

  connection.query(q, [id], (err, result) => {
    if (err) {
      return res.send("Some error occurred while fetching user.");
    }

    if (result.length === 0) {
      return res.send("User not found.");
    }

    let user = result[0];
    res.render("edit", { user });
  });
});

// 🌟 Update User (PATCH)
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { username: newuser, password: formpass } = req.body;
  let q = `SELECT * FROM user WHERE id='${id}'`;

  connection.query(q, (err, result) => {
    if (err) {
      return res.send("Error updating user.");
    }

    let user = result[0];
    if (formpass != user.password) {
      res.send("Wrong Password");
    } else {
      let q = `UPDATE user SET username = '${newuser}' WHERE id = '${id}'`;
      connection.query(q, (err, result) => {
        if (err) {
          res.send(err);
        }
      });
      res.redirect("/user"); // ✅ Redirect to users list after update
    }
  });
});

// ✅ Serve the Add User Form (GET request)
app.get("/user/add", (req, res) => {
  res.render("add"); // Render addUser.ejs form
});

// ✅ Handle Form Submission (POST request)
app.post("/user/add", (req, res) => {
  let userId = uuidv4(); // Generate unique ID
  let { username, emails, pass } = req.body; // Extract form data

  let q = `INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)`;
  connection.query(q, [userId, username, emails, pass], (err, result) => {
    if (err) {
      console.error("Error inserting user:", err);
      return res.send("Error adding user!");
    }
    res.redirect("/user");
  });
});

// ✅ Render delete confirmation page
app.get("/user/:id/delete", (req, res) => {
  let { id } = req.params;

  let q = `SELECT * FROM user WHERE id = ?`;
  connection.query(q, [id], (err, results) => {
    if (err) {
      console.error("Error fetching user:", err);
      return res.send("User not found!");
    }
    if (results.length === 0) {
      return res.send("No user found with this ID.");
    }
    res.render("delete", { user: results[0] });
  });
});

// ✅ Handle DELETE request
app.delete("/user/:id", (req, res) => {
  let { id } = req.params;
  let { pass } = req.body;

  // ✅ Check if password matches before deleting
  let q = `SELECT * FROM user WHERE id = ?`;
  connection.query(q, [id], (err, results) => {
    if (err) {
      console.error("Error fetching user:", err);
      return res.send("Error fetching user!");
    }
    if (results.length === 0) {
      return res.send("User not found!");
    }

    let user = results[0];

    if (user.password !== pass) {
      return res.send("❌ Incorrect password!");
    }

    // ✅ Delete the user
    let deleteQuery = `DELETE FROM user WHERE id = ?`;
    connection.query(deleteQuery, [id], (err, result) => {
      if (err) {
        console.error("Error deleting user:", err);
        return res.send("Error deleting user!");
      }
      res.redirect("/user");
    });
  });
});

// Start the server
app.listen(8080, () => {
  console.log("🚀 Server is running on port 8080!");
});
