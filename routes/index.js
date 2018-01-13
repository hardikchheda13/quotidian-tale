const express = require("express");
const router = express.Router();
const data = require("../data");
const userData = data.users;
var session = require('express-session')

//var bcrypt = require("bcrypt-nodejs");
console.log("inside index")
const constructorMethod = (app) => {
    console.log("inside routes index")
    //app.use(cookieParser());
    app.get('/', async(req, res) =>{
        // res.clearCookie(req.cookies.sessionId);
        
         console.log('Calling Welcome page');
         
         res.render('users/login');
             
       });

       app.post('/', async(req, res) =>{
        // res.clearCookie(req.cookies.sessionId);
        username= req.body.userName;
        password= req.body.userPassword;
        console.log("inside post /")
        console.log(username)
        console.log(password)
         console.log('Calling Welcome page');
         
         res.render('users/login');
             
       });

       

       app.use("*", (req, res) => {
        res.status(404).json("Not found");
    })
};

module.exports = constructorMethod;

