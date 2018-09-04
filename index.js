//Requires
var bodyParser = require("body-parser");
var express = require("express");
var ejsLayouts = require("express-ejs-layouts");
// it includes the file teamService.js
var teamsDB = require("./models/teamService.js");

//Global vars
var app = express();

//Set and Use statements
app.set("view engine", "ejs");
app.use(ejsLayouts);
app.use(bodyParser.urlencoded({extented: false}));
app.use(express.static("public"));

//Routes
app.get("/", function(req, res){
  res.render("home");
});

app.get("/teams", function(req, res) {
	// updates the all teams becuase it gets the all teams everytime:
	var allTeams = teamsDB.getAllTeams();
	//console.log('hi', allTeams)
	//sending a messaging for checking the function is working: 
	res.render("teams/index", {teams: allTeams});  //display the all teams
});

// : means it is a variable: 
// app.get("/teams/:name", function(req, res){
// 	//params is build in the express: 
// 	var team = teamsDB.getOneTeam(req.params.name);
// 	res.send(team);
// });
app.get("/teams/new", function(req, res){
	res.render("teams/new");
});

app.get("/teams/:name", function(req, res){
	//params is build in the express: 
	var team = teamsDB.getOneTeam(req.params.name);
	res.render("teams/show", {team: team});
});


app.post("/teams", function(req, res){
	console.log(req.body);
	teamsDB.addTeam(req.body);
//  res.send("POST IS WORKING!");
	res.redirect("/teams/" + req.body.name);
});

app.get("/teams/edit/:name", function(req, res){
	var team = teamsDB.getOneTeam(req.params.name);
	res.render("teams/edit", {team: team});
});

app.put("/teams/:name", function(req, res){
	console.log(req.body);
	teamsDB.editTeam(req.params.name, req.body);
	res.send("PUUUUUUUUUUUUUT");
});

app.delete("/teams/:name", function(req, res){
	teamsDB.deleteTeam(req.params.name);
	res.send("DELETE!");
});




//Listen
app.listen(3000);










