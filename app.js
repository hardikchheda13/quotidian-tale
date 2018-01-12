const express = require("express");
const bodyParser = require("body-parser");
const app = express();
//const configRoutes = require("./routes");
const exphbs  = require('express-handlebars');
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
const static = express.static(__dirname + '/public');
app.use("/public", static);
app.use(bodyParser.json());
var hbs = require('handlebars');
//hardik chheddhahaa
//hardik chheda new changes
<<<<<<< HEAD
//configRoutes(app);
||||||| merged common ancestors
//hardik new changes done jasmeet bhenchod
configRoutes(app);
=======
//hardik new changes done jasmeet bhenchod
//configRoutes(app);
>>>>>>> 666ed60a977f06a583c3a886c5afbce7195730d9
//Jasmeet New changes done 
app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:3000");
});