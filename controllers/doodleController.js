//DEPENDENCIES
const express = require('express');
const router = express.Router();

const { getAllDoodles, getOneDoodle, createDoodle, deleteDoodle, updateDoodle } = require('../queries/doodles');

const { validateURL, validateDate } = require('../validations/validations');

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
router.post('/', validateURL, validateDate, async (req, res) => {
    let result = await createDoodle(req.body);

    if(result.length === 0){
        res.status(500).send("Sorry, the doodle couldn't be created")
    }
    else{
        res.send(result[0]);
    }
});

//DELETE - DELETE A DOODLE
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    let result = await deleteDoodle(id);

    if(result.length === 0){
        res.status(500).send("Sorry, this doodle couldn't be deleted")
    }
    else{
        res.send(result[0]);
    }
});

//UPDATE - UPDATE A DOODLE
router.put('/:id', async (req, res) => {
    const { id } = req.params;

    let result = await updateDoodle(id, req.body);

    if(result.length === 0){
        res.status(500).send("Sorry, this doodle couldn't be updated")
    }
    else{
        res.send(result[0]);
    }
});


module.exports = router;