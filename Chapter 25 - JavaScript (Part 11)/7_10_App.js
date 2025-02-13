function saveToDB(data) {
  return new Promise((success, failure) => {
    let internet = Math.floor(Math.random() * 10) + 1;
    if (internet < 4) {
      failure("Failure : Data Was Not Saved");
    } else {
      success("Success : Data Was Saved");
    }
  });
}

let req = saveToDB("Gaurav Pawar .");

req
  .then((result) => {
    console.log("Result of Promise : ", result);
    console.log("Promise 1 Was Resolved");
    return saveToDB("Gaurav Pawar ..");
  })
  .then((result) => {
    console.log("Result of Promise : ", result);
    console.log("Promise 2 Was Resolved");
    return saveToDB("Gaurav Pawar ...");
  })
  .then((result) => {
    console.log("Result of Promise : ", result);
    console.log("Promise 3 Was Resolved");
  })
  .catch((error) => {
    console.log("Error : ", error);
    console.log("Promise Was Not Resolved");
  });
