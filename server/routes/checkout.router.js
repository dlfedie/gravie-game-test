const express = require('express');
const router = express.Router();
const moment = require('moment');

// here is our past transactions
const transactions = [];
let transactionID = 1;

// POST route to store our cart data
router.post('/', (req, res) => {
    let cart = req.body;
    console.log('checkout POST: ', cart);

    let timestamp = moment().format();
    
    transactions.push({games: cart, transactionID: transactionID, timestamp: timestamp});

    transactionID++;
    console.log('here are the transactions so far: ', transactions);
    
    res.sendStatus(201);

});

// GET route for all data
router.get('/', (req, res) => {
    console.log('in checkout GET route');
    res.send(transactions);
});

module.exports = router;