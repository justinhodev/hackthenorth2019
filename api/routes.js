const express = require('express');
const receipts = require('./receipt');

let router = express.Router();

router.get('/receipts/:store', receipts.getReceipt);

module.exports = router;