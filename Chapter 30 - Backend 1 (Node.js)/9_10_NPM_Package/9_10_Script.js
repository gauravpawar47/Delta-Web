let figlet = require("figlet");

figlet("student47", function (err, data) {
  if (err) {
    console.log("Something Went Wrong ..!");
    console.dir(err);
    return;
  }
  console.log(data);
});
