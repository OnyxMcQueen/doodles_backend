const db = require('../db/dbConfig');


// GET ALL THE DOODLES
async function getAllDoodles(){
    try{
        const allDoodles = await db.any("SELECT * FROM doodles ORDER BY id ASC");
        return allDoodles;
    }
    catch(error){
        return error;
    }
}

//GET ONE DOODLE
async function getOneDoodle(id){
    try{
        const doodle = await db.any("SELECT * FROM doodles WHERE id = $1 ", id);
        return doodle;
    }
    catch(error){
        return error;
    }
}

//CREATE A DOODLE
async function createDoodle(data){

    const {
        title,
        artist_name,
        created_date,
        image_url,
        doodle_description
    } = data;

    try{
        let result = await db.any("INSERT INTO doodles (title, artist_name, created_date, image_url, doodle_description) VALUES ($1, $2, $3, $4, $5) RETURNING *", [title, artist_name, created_date, image_url, doodle_description]);
        return result;
    }
    catch(error){
        return error;
    }
}




module.exports = {
    getAllDoodles,
    getOneDoodle,
    createDoodle
}