//DEPENDENCIES
const express = require('express');
const router = express.Router();

const { getAllDoodles } = require('../queries/doodles');

//INDEX - GET ALL DOODLES
router.get('/', async (req, res) => {
    let result = await getAllDoodles();

    if(result.length === 0){
        res.status(500).send("Could not find any doodles.")
    }
    else{
        res.send(result);
    }
});




module.exports = router;