const EXPRESS = require("express");
const APP = EXPRESS();
const API_PORT = 8081;

APP.get("/", function(req, res) {
  res.send("hello world");
});

APP.post("/save", function(req, res) {
  res.send("hello world");
});

APP.listen(API_PORT, () =>
  console.log(`Example app listening on port ${API_PORT}!`)
);
