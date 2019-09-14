const admin = require("firebase-admin");

let serviceAccount = require("./config.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://hackthenorth2019-62b14.firebaseio.com"
});

let db = admin.firestore();

module.exports = db;
