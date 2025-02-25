const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    id: uuidv4(),
    username: "Gaurav Pawar",
    content: "Thrill to Share my Internship Interview at Microsoft",
  },
  {
    id: uuidv4(),
    username: "Pratik Nikam",
    content: "Here's how I cracked ISRO Internship Interview",
  },
  {
    id: uuidv4(),
    username: "Pruthviraj Patil",
    content: "You Can't See Me, Minimizing Window",
  },
];

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content });
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  const postId = req.params.id;
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return res.status(404).send("Post not found");
  }

  res.render("show", { post });
});

app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let newContent = req.body.content;
  let post = posts.find((p) => p.id === id);

  if (!post) {
    return res.status(404).send("Post not found");
  }

  post.content = newContent;
  res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
  let id = req.params.id;
  let post = posts.find((p) => id === p.id);

  if (!post) {
    return res.status(404).send("Post not ready to edit");
  }

  res.render("edit", { post });
});

app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => p.id !== id);
  res.redirect("/posts/");
});

app.listen(port, () => {
  console.log("Running on port", port);
});
