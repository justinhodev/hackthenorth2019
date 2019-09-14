var express = require("express");
var app = express();
var admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://<DATABASE_NAME>.firebaseio.com"
});

var port = 8081;

app.get("/", function(req, res) {
  res.send("hello world");
});

app.post("/save", function(req, res) {
  res.send("hello world");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
