const FIREBASE_ADMIN = require("firebase-admin");
const FIREBASE_CONFIG = require("./config.json");
const CONFIG_ERROR = "databaseName and the service key must be set";
const DATABASE_NAME = FIREBASE_CONFIG["firebaseDatabaseName"];
const SERVICE_KEY_PATH = FIREBASE_CONFIG["serviceKeyPath"];

const collectionUser = "user";
const collectionItems = "items";
const collectionReceipts = "Receipts";

if (!DATABASE_NAME || !SERVICE_KEY_PATH) {
  console.error(CONFIG_ERROR);
}

FIREBASE_ADMIN.initializeApp({
  credential: FIREBASE_ADMIN.credential.cert(SERVICE_KEY_PATH),
  databaseURL: `https://${DATABASE_NAME}.firebaseio.com`
});
let DB = FIREBASE_ADMIN.firestore();

class firestoreDataProvider {
  createTestData(numUsers) {
    const testProducts = ["Cookies", "Crackers", "Toothbrush"];
    //   Create Users
    for (var i = 0; i < numUsers; i++) {
      let r = Math.random()
        .toString(36)
        .substring(7);
      DB.collection("users")
        .add({ fname: r, lname: r })
        .then(() => console.log("success"));
    }

    //   Create Purchases
  }
}

// new firestoreDataProvider().createTestData(2);
