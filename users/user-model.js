const db = require("../database/dbConfig")

module.exports ={
    insertUser,
    findBy
}

function insertUser(user){
    return db("users")
    .insert(user)
}
function findBy(user){
    return db("users").where(user);
}