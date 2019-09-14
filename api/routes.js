const express = require('express');
const receipts = require('./receipt');

let router = express.Router();

router.get('/receipts', receipts.getReceipts);

router.get('/receipts/:store', receipts.getReceiptByStore);

router.post('/receipts', receipts.postReceipt);

module.exports = router;