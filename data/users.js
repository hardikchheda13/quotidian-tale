const mongoCollections = require("../config/mongoCollections");
const users = mongoCollections.users;
const uuid = require("uuid");

const exportedMethods  = {
async get_hashed_password(username) {
    console.log(username)
    const userCollection=await users()
    let a= await userCollection.find({user_id:username},{password:1, _id:0}).toArray();
    console.log(a)
    console.log(a[0].password)
    return a[0].password; 
 }
}