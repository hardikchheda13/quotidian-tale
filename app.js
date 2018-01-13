const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const Handlebars = require('handlebars');
//const hbs =  require('handlebars');
const configRoutes = require("./routes");
//const configRoutes = require("./routes");
console.log(configRoutes)
const exphbs  = require('express-handlebars');
/*
const handlebarsInstance = exphbs.create({
    defaultLayout: 'main',
    // Specify helpers which are only registered on this instance.
    helpers: {  
        asJSON: (obj, spacing) => {
            if (typeof spacing === "number")
                return new Handlebars.SafeString(JSON.stringify(obj, null, spacing));
        
            return new Handlebars.SafeString(JSON.stringify(obj));
        }
    }
});*/

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
const static = express.static(__dirname + '/public');
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/public", static);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//const static = express.static(__dirname + '/public');
//app.use("/public", static);
app.use(bodyParser.json());
//var hbs = require('handlebars');

//configRoutes(app);

var hbs = require('handlebars');
configRoutes(app);
//configRoutes(app);

app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:3000");
});