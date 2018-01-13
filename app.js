const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const Handlebars = require('handlebars');
const configRoutes = require("./routes");
console.log(configRoutes)
const exphbs  = require('express-handlebars');
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
const static = express.static(__dirname + '/public');
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/public", static);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
configRoutes(app);
app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:3000");
});