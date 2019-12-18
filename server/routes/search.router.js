const express = require('express');
const router = express.Router();
const axios = require('axios');



// POST route to get Giant Bomb data
router.post('/', (req, res) => {
    //log the query
    const searchQuery = req.body;
    //looks like we get .search as a key
    console.log('in searchRouter POST', searchQuery.searchText);

    const googleBooks = `https://www.googleapis.com/books/v1/volumes?q=${searchQuery.searchText}&key=${process.env.GOOGLE_BOOKS_API_KEY}&maxResults=20`;
    axios.get(googleBooks)
        .then(result => {
            console.log('successful GET from Google Books api');
            res.send(result.data)
        }).catch(error => {
            console.log('error in Google Book GET', error);
            res.sendStatus(500);
        })
});

module.exports = router;