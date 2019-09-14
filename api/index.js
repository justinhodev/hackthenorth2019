const EXPRESS = require("express");
const APP = EXPRESS();
const FIREBASE_ADMIN = require("firebase-admin");
const FIREBASE_CONFIG = require("./config.json");
const API_PORT = 8081;
const CONFIG_ERROR = "databaseName and the service key must be set";
const DATABASE_NAME = FIREBASE_CONFIG["firebaseDatabaseName"];
const SERVICE_KEY_PATH = FIREBASE_CONFIG["serviceKeyPath"];

if (!DATABASE_NAME || !SERVICE_KEY_PATH) {
  console.error(CONFIG_ERROR);
}

FIREBASE_ADMIN.initializeApp({
  credential: FIREBASE_ADMIN.credential.cert(),
  databaseURL: `https://${DATABASE_NAME}.firebaseio.com`
});

APP.get("/", function(req, res) {
  res.send("hello world");
});

APP.post("/save", function(req, res) {
  res.send("hello world");
});

APP.listen(API_PORT, () =>
  console.log(`Example app listening on port ${API_PORT}!`)
);
