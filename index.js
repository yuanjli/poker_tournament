//Requires
var express = require("express");
var ejsLayouts = require("express-ejs-layouts");

//Global vars
var app = express();

//Set and Use statements
app.set("view engine", "ejs");
app.use(ejsLayouts);

//Routes
app.get("/", function(req, res){
  res.render("home");
});

//Listen
app.listen(3000);
