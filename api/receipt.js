const db = require('./firebase');

const receipt = db.collection('receipts');

module.exports = {
  getReceipt: async function(req, res) {
    try {
      let data = await receipt.where('store', '==', req.params.store).get();
      
      if (!data) {
        console.log("nothing found");
      } else {
        let result = [];

        data.forEach(doc => {
          result.push(doc.data());
        });

        res.json(result);
      }
    } catch (e) {
      console.log("nothing found");
    }
  }
}