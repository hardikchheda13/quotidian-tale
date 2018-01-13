const express = require("express");
const router = express.Router();
const data = require("../data");
const userData = data.users;
var session = require('express-session')

//var bcrypt = require("bcrypt-nodejs");


//const userData = data.users;
const bodyParser = require("body-parser");
var bcrypt = require("bcrypt-nodejs");

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

       

      
app.get('/signup', async(req,res)=>{
    //console.log(data)
    res.render("users/signUp")
})
app.post('/signup', async(req, res) =>{
    /*options1 = {
        whiteList: [],
        stripIgnoreTag: true,
        stripIgnoreTagBody: ['script']
    };*/
    //signupCheckList = xss.FilterXSS(options1);
       
    console.log("inside post signUp")
    try{
        name = req.body.fullName;
        user_id = req.body.userName;
        email = req.body.emailId;
        phone_number = req.body.phoneNumber;
        //type = "Customer";
        password = req.body.userPassword;//plsintext password
        console.log(name+" "+user_id+" "+email+" "+name+" "+phone_number+" "+password)
        console.log('plain pass:', password)
        //Hashing password
        const saltRounds = 16;
        
        var salt = bcrypt.genSaltSync(saltRounds);
        var hash = bcrypt.hashSync(password, salt);
//CHanngeesssss
const allOwners = await userData.username_exists(user_id);
if(allOwners.status)
{
//add new user
//console.log('Calling addUser')
const newUser = await userData.addUser(name, user_id, email, phone_number,  hash);
//req.session.userid=await userData.get_id(user_id)
res.send("user added")
}
else //for false status
{
res.render('users/signUp', {title: allOwners.message}); 
}
////CHnadjhvjkdfgvb
       /* console.log('Hashed!!!', hash)
        console.log('Calling addUser')
        */
        }//end of try
        catch (e){
            console.log('inside catch');
            console.log(e);            
        }//end of catch
        
});
}
module.exports=constructorMethod;
