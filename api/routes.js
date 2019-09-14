const express = require('express');
const receipts = require('./receipt');
const items = require('./item');

let router = express.Router();

// Get all receipts
router.get('/receipts', receipts.getReceipts);

// Get single receipt
router.get('/receipts/:store', receipts.getReceiptByStore);

// Create a receipt
router.post('/receipts', receipts.postReceipt);

// Get all items
router.get('/items', items.getItems);

// Get single item
router.get('/items/:name', items.getItemByName);

// Create an item
router.get('/items', items.addItem);

module.exports = router;