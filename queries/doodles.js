const db = require('../db/dbConfig');


// GET ALL THE DOODLES
async function getAllDoodles(){
    try{
        const allDoodles = await db.any("SELECT * FROM doodles");
        return allDoodles;
    }
    catch(error){
        console.log(error);
    }
}




module.exports = {
    getAllDoodles
}