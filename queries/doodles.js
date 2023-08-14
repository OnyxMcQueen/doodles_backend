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




module.exports = {
    getAllDoodles,
    getOneDoodle
}