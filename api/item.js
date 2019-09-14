const db = require("./firebase");

const items = db.collection("items");

module.exports = {
  getItems: async function(req, res) {
    try {
      let data = await items.get();

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
  getItemByName: async function(req, res) {
    try {
      let data = await items.where("name", "==", req.params.name).get();

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
  addItem: async function(req, res) {
    try {
      const result = await items.add(req.body);
      res.json({ item: result.id });
    } catch (e) {
      console.log(e);
      res.json({});
    }
  }
};
