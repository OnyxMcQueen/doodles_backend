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

//DELETE DOODLE
async function deleteDoodle(id){
    try{
        let result = await db.any("DELETE FROM doodles WHERE id = $1 RETURNING *", id);
        return result;
    }
    catch(error){
        return error;
    }
}

//UPDATE DOODLE
async function updateDoodle(id, data){
    let values = Object.values(data);

    function makeCustomQueryString(data){
        let count = 2;
        let result = "";

        for(let key in data){
            result+= `${key} = $${count},`
            count++;
        }

        result = result.substring(0, result.length - 1);
        return result;
    }

    let queryString = makeCustomQueryString(data);
    let finalQueryString = `UPDATE doodles SET ${queryString} WHERE id = $1 RETURNING *`

    const result = await db.any(finalQueryString, [id, ...values]);
    return result;
}




module.exports = {
    getAllDoodles,
    getOneDoodle,
    createDoodle,
    deleteDoodle,
    updateDoodle
}