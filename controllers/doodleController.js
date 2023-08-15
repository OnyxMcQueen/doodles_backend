//DEPENDENCIES
const express = require('express');
const router = express.Router();

const { getAllDoodles, getOneDoodle, createDoodle } = require('../queries/doodles');

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

//INDEX - GET ONE DOODLE
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    let result = await getOneDoodle(id);

    if(result.length === 0){
        res.status(500).send("Sorry could not find that specific doodle.")
    }
    else{
        res.send(result[0]);
    }
});

//CREATE - MAKE A DOODLE
router.post('/', async (req, res) => {
    let result = await createDoodle(req.body);

    if(result.length === 0){
        res.status(500).send("Sorry, the doodle couldn't be created")
    }
    else{
        res.send(result[0]);
    }
});




module.exports = router;