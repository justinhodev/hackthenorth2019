const db = require("./firebase");

const receipt = db.collection("receipts");

module.exports = {
  getReceipts: async function(req, res) {
    try {
      let data = await receipt.get();

      if (!data) {
        console.log("nothing found");
        res.json({});
      } else {
        let result = [];

        data.forEach(doc => {
          result.push(doc.data());
        });

        res.json(result);
      }
    } catch (e) {
      console.log(e);
      res.json({});
    }
  },
  getReceiptByStore: async function(req, res) {
    try {
      let data = await receipt.where("store", "==", req.params.store).get();

      if (!data) {
        console.log("nothing found");
        res.json({});
      } else {
        let result = [];

        data.forEach(doc => {
          result.push(doc.data());
        });

        res.json(result);
      }
    } catch (e) {
      console.log("nothing found");
      res.json({});
    }
  },
  postReceipt: async function(req, res) {
    try {
      const result = await receipt.add(req.body);
      res.json({ receipt: result.id });
    } catch (e) {
      console.log(e);
      res.json({});
    }
  }
};
