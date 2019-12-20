const express = require('express');
const router = express.Router();
const axios = require('axios');



// POST route to get Giant Bomb data
router.post('/', (req, res) => {
    // store the the query
    const searchQuery = req.body;
    // on front end we passed it as a key for .searchText
    console.log('in searchRouter POST', searchQuery.searchText);

    const giantBombMetroidPrime = `http://www.giantbomb.com/api/search/?api_key=${process.env.GIANT_BOMB_API_KEY}&format=json&query="metroid prime"&resources=game&field_list=genres,name,deck,image,platforms,developers,publishers`
    const giantBombSearch = `http://www.giantbomb.com/api/search/?api_key=${process.env.GIANT_BOMB_API_KEY}&format=json&query=${searchQuery.searchText}&resources=game&field_list=genres,name,deck,image,platforms,developers,publishers,id`


    axios.get(giantBombSearch)
        .then(result => {
            console.log('successful GET from Giant Bomb api');
            res.send(result.data)
        }).catch(err => {
            console.log('error in Giant Bomb GET');
            res.sendStatus(500);
        })

    
});

module.exports = router;