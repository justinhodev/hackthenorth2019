const express = require('express');
const receipts = require('./receipt');

let router = express.Router();

// Get all receipts
router.get('/receipts', receipts.getReceipts);

// Get single receipt
router.get('/receipts/:store', receipts.getReceiptByStore);

// Create a receipt
router.post('/receipts', receipts.postReceipt);

module.exports = router;